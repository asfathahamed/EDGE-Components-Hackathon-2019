# \<review-rating\>

a customized rating and review component in Polymer 3.0

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
http://127.0.0.1:8081/review-rating/test/
```

## Basic info about review-rating component
<review-rating> component can be used to rate a service and provide feedback for improvement with support for 
localization

Example:
````
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
```
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

### Integration to application
### In an html file
```html
<html>
  <head>
    <script type="module">
      import 'review-rating/review-rating.js';
    </script>
  </head>
  <body>
    <div style="display:inline-block">
        <review-rating id="review">
          <span slot="slot-1">Awful</span>
          <span slot="slot-2">Good</span>
          <span slot="slot-3">Very Good</span>
          <span slot="slot-5">Awesome</span>
          <span slot="slot-4">Excellent</span>
        </review-rating>
    </div>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import 'review-rating/review-rating.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
        <div style="display:inline-block">
            <review-rating id="review">
              <span slot="slot-1">Awful</span>
              <span slot="slot-2">Good</span>
              <span slot="slot-3">Very Good</span>
              <span slot="slot-5">Awesome</span>
              <span slot="slot-4">Excellent</span>
            </review-rating>
        </div>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```