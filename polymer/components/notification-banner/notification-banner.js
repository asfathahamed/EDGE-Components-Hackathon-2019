import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/neon-animation/neon-animations.js';
import {IronA11yAnnouncer} from '@polymer/iron-a11y-announcer/iron-a11y-announcer.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './notification-banner-styles.js';

/**
<notification-banner> component can be used to notify user status of an action or to provide info 
to the user in the form of toast
Example:
`````
as notification
<notification-banner 
  type="success|error|warning|info|custom" 
  text="message to be shown to user"
  icon-type="icon that can be shown  if the type is set to custom"
  opened="true|false">
</notification-banner>


```````
as toast
<notification-banner 
  toast
  text="message to be shown to user"
  opened="true|false"
  toast-timeout="time in miliseconds toast need to be visible"
  toast-position="top-left|top-right|bottom-right|bottom-left"
></notification-banner>
```````

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--notification-banner-container-text-align` | The text alignement of the container | `center`
`--mixin-container` | Mixin applied to the container | `{}`
`--notification-banner-height` | height of the notification banner | `76px`
`--notification-banner-toast-height` | height of the toast | `76px`
`--mixin-dialog` | Mixin applied to notification banner| `{}`
`--notification-banner-toast-bg-color` | background color of toast | `#363636`
`--notification-banner-toast-color` | font color of toast| `#ffffff`
`--mixin-toast` | Mixin applied to toast | `{}`
`--notification-banner-success-border-color` | border color of success banner | `#4caf50`
`--notification-banner-success-bg-color` | background color of success banner | `#f1f8e9`
`--notification-banner-success-color` | font color of success banner | `#4caf50`
`--notification-banner-error-border-color` | border color of error banner | ` #f50808`
`--notification-banner-error-bg-color` | background color of error banner | `#f7d7d7`
`--notification-banner-error-color` | font color of error banner | `#f50808`
`--notification-banner-toast-bg-color` | background color of toast | `#363636`
`--notification-banner-toast-color` | font color of toast | `#ffffff`
`--mixin-close-icon` | Mixin applied to close icon | `{}`

@element notification banner
@demo demo/index.html
*/
class NotificationBanner extends PolymerElement {
  static get template() {
    return html`
      <style include="notification-banner-styles"></style>
      <paper-dialog id="dialog" class$="[[className]]" 
        entry-animation="scale-up-animation"
        exit-animation="scale-down-animation" 
        modal>
        <div class="container">
          <iron-icon icon="[[iconType]]"></iron-icon>
          <slot></slot>
          [[text]]
        </div>
        <iron-icon class="close" icon="close" on-tap="hide"></iron-icon>
      </paper-dialog>

      <div class="toast-container">
        <paper-dialog id="toast" class="toast" class$="[[toastPosition]]"
        entry-animation="scale-up-animation"
        exit-animation="scale-down-animation">
        <div class="container">
          <slot></slot>
          [[text]]
        </div>
    </paper-dialog>
      </div>
      
    `;
  }

  static get is() {
    return 'notification-banner';
  }

  static get properties() {
    return {
      version: {
        type: String,
        value: '1.0.0'
      },
      isVisible: {
        type: Boolean,
        readonly: true,
        value: false
      },
      text: {
        type: String,
        value: ''
      },
      iconType: String,
      type: {
        type: String,
        value: '',
        observer: '_typeChanged'
      },
      opened: {
        type: Boolean,
        value: false,
        observer: '_openedChanged'
      },
      //related to toast type notification
      toast: {
        type: Boolean,
        value: false,
        observer: '_toastChanged'
      },
      //related to toast type notification
      toastPosition: {
        type: String,
        value: ''
      },
      //related to toast type notification
      toastTimeout: {
        type: Number,
        value: 5000
      },
      genericEvent: {
        type: Object,
        value: { bubbles: true, composed: true }
      }
    };
  }

  _typeChanged(newVal) {
    switch(newVal) {
      case 'success':
        this.className= 'success';
        this.iconType= 'check';
      break;

      case 'info':
        this.className= 'info';
        this.iconType= 'info';
      break;

      case 'warning':
        this.className= 'warning';
        this.iconType= 'warning';
      break;

      case 'error':
        this.className= 'error';
        this.iconType= 'error';
      break;

      case 'custom':
        this.className= 'custom';
      break;
    }
  }

  ready() {
    super.ready();
    IronA11yAnnouncer.requestAvailability();
  }

  hide() {
    if (this.isVisible) {
      this.opened = false;
      this.$.dialog.opened = false;
      this.isVisible = false;
      this.dispatchEvent(new CustomEvent('banner-closed',
      this.genericEvent));
    }
  }

  _openedChanged(newVal) {
    if(newVal) {
      this.$.dialog.opened = true;
      this.isVisible = true;
      IronA11yAnnouncer.instance.fire('iron-announce',
      {text: this.text}, this.genericEvent);
    }
  }

  _toastChanged(newVal) {
    if(newVal) {
      this.$.toast.opened = true;
      IronA11yAnnouncer.instance.fire('iron-announce',
      {text: this.text}, this.genericEvent);
   
      setTimeout(()=> {
        this.toast = false;
        this.$.toast.opened = false;
        this.dispatchEvent(new CustomEvent('toast-closed',
        this.genericEvent));
      }, this.toastTimeout);
    }
  }
}

window.customElements.define(NotificationBanner.is, NotificationBanner);
