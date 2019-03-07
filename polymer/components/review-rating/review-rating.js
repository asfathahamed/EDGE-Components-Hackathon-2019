import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {AppLocalizeBehavior} from '@polymer/app-localize-behavior/app-localize-behavior.js';
import '@polymer/neon-animation/neon-animations.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './review-rating-styles.js';


/**
<review-rating> component can be used to rate a service and provide feedback for improvement with support for 
localization support

Example:
````
as notification
<review-rating>
    <span slot="slot-1">Awful</span>
    <span slot="slot-2">Good</span>
    <span slot="slot-3">Very Good</span>
    <span slot="slot-5">Awesome</span>
    <span slot="slot-4">Excellent</span>
</review-rating>

text provided within slot property will  be shown on each star icon when user hovers on it
A custom event 'feedback-submitted' will be triggered when user submit his feedback with current rating
selected by user and feedback text
````

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--review-rating-font-size` | font size for component | `16px`
`--review-rating-line-height` | font line height for component | `16px`
`--review-rating-font-family` | font family for the component | `sans-serif`
`--review-rating-text-align` | text alignment for review container | `center`
`--review-rating-paper-dialog-width` | paper-dialog width shown after user submits feedback | `80%`
`--review-rating-paper-dialog-height` | paper-dialog height shown after user submits feedback | `30%`
`--review-rating-icon-close-bg-color` | close icon background color | `#ffffff`
`--review-rating-icon-close-border-color` | close icon border color | `#e5e5e5`
`--review-rating-icon-check-color` | check icon color | `#5BA829`
`--review-rating-message-top` | position of the message shown on feedback success modal | `50px`
`--review-rating-message-font-size` | font size of the text shown on feedback success modal | `30px`
`--review-rating-message-line-height` | line height of font shown on feedback success modal | `30px`
`--review-rating-star-icon-color` | star icon color for rating | `#FFD700`
`--review-rating-btn-submit-width` | width of the submit button | `150px`
`--review-rating-btn-submit-color` | font color of submit button | `#ffffff`
`--review-rating-btn-submit-bg-color` | background color of submit button | `#3f51b5`
`--review-rating-btn-cancel-width` | width of the cancel button | `150px`
`--review-rating-btn-cancel-color` | font color of cancel button | `#9e9e9e`
`--review-rating-btn-cancel-bg-color` | background color of cancel button | `#9e9e9e`
`--mixin-xs-btn-submit` | mixin applied to submit button for mobile breakpoint | `{}`
`--mixin-xs-btn-cancel` | mixin applied to cancel button for mobile breakpoint | `{}`

@element review rating
@demo demo/index.html


/**
 * `review-rating`
 * A simple review-rating component using polymer 3.0 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ReviewRating extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {
  static get template() {
    return html`
      <style include="review-rating-styles"></style>

      <div class="review-container">
        <div class="rating-container" >
          <template is="dom-repeat" items="{{ratings}}">
            <input type="radio" 
              class="sr-only"
              name="rating" 
              value="[[item.value]]" 
              id="star_[[item.id]]" 
              checked="{{item.checked::tap}}">
              <label for$=star_[[item.id]] id="label_[[item.id]]">☆</label>
              <paper-tooltip for$="label_[[item.id]]">
                <slot name="slot-[[item.id]]"></slot>
              </paper-tooltip>
            </template>
        </div>

        <div class="feedback-container">
          <template is="dom-if" if="[[isFeedbackAvailable]]">
            <paper-textarea 
              label="[[label]]" 
              char-counter 
              maxlength="[[maxFeedbackLength]]" 
              value="{{feedbackText}}">
            </paper-textarea>
          </template>
        </div>

        <template is="dom-if" if="[[isFeedbackAvailable]]">
          <paper-button raised 
            class="btn-submit" 
            on-tap="openDialog">
            [[localize('submitBtnText')]]
          </paper-button>
          <paper-button raised 
            class="btn-cancel" 
            on-tap="resetRating">
            [[localize('resetBtnText')]]
          </paper-button>
        </template>
      </div>

      <paper-dialog id="dialog" 
        modal 
        entry-animation="scale-up-animation" 
        exit-animation="scale-down-animation" 
        with-backdrop>
          <span class="icon-close no-padding">
            <iron-icon icon="close" 
            on-tap="closeDialog"></iron-icon>
          </span>
          <div class="check">
            <iron-icon class="icon-check" icon="check"></iron-icon>
          </div>
          <div class="message">
            [[localize('successMessage')]]
          </div>
      </paper-dialog>
    `;
  }

  static get properties() {
    return {
      ratings : {
        type: Array,
        value: () => {
          return [
              { 'id': 5, 'checked': false, 'value': '5'},
              { 'id': 4, 'checked': false, 'value': '4'},
              { 'id': 3, 'checked': false, 'value': '3'},
              { 'id': 2, 'checked': false, 'value': '2'},
              { 'id': 1, 'checked': false, 'value': '1'}
          ];
        }
      },
      currentRating: {
        type: Number,
        value: 0,
        notify: true
      },
      isFeedbackAvailable: {
        type: Boolean,
        value: false
      },
      label:String,
      feedbackText: String,
      maxFeedbackLength: {
        type: Number,
        value: 150
      },
      genericEvent: {
        type: Object,
        value: { bubbles: true, composed: true }
      },
      language: {
        type: String,
        value: 'en'
      },
      resources: {
        type: Object,
        value:() =>  ({
          'en': {
            'successMessage': 'Thanks for your feedback',
            'submitBtnText' : 'Submit your feedback',
            'resetBtnText': 'Reset'
          }
        })
      }
    };
  }

  static get observers() {
    return ['_ratingsChanged(ratings.*)'] ;
  }

  _ratingsChanged(changeRecord) {
    for(let item in this.ratings) {
      this.ratings[item].checked = false;
    }
    let pattern = /\d+/;
    let placeHolder = pattern.exec(changeRecord.path);
    if(placeHolder && placeHolder.length > 0) {
      this.ratings[placeHolder[0]].checked = true;
      this.currentRating = this.ratings[placeHolder[0]].value;
      this.isFeedbackAvailable = true;
    }
  }

  static get is() {
    return 'review-rating';
  }
  
  openDialog() {
    this.$.dialog.opened=true;
    const {currentRating, feedbackText} = this;
    const detail = {currentRating, feedbackText};
    this.dispatchEvent(new CustomEvent('feedback-submitted', {detail}, this.genericEvent));
  }
  
  closeDialog() {
    this.$.dialog.opened=false;
  }

  resetRating() {
    if(this.currentRating){
      let path;
      let ratings = [];
      for(let item in this.ratings) {
        ratings[item] = this.ratings[item];
        if(ratings[item].checked){
          ratings[item].checked = false;
          path = `ratings.${item}.checked`;
        }
      }
      this.notifyPath(path);
      this.set('ratings', ratings);
      
      this.currentRating = 0;
      this.feedbackText = '';
      this.isFeedbackAvailable = false;
    }
  }
}

window.customElements.define(ReviewRating.is, ReviewRating);
