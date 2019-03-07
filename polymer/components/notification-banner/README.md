# \<notification-banner\>

a customized notification banner component in Polymer 3.0

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
http://127.0.0.1:8081/notification-banner/test/
```

## Basic info about notification component
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
A custom event 'banner-closed' is triggered when user closes the notification banner


````
as toast

<notification-banner 
  toast
  text="message to be shown to user"
  opened="true|false"
  toast-timeout="time in miliseconds toast need to be visible"
  toast-position="top-left|top-right|bottom-right|bottom-left">
</notification-banner>
A custom event 'toast-closed' is triggered when toast is closed

````

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

### Integration to application
### In an html file
```html
<html>
  <head>
    <script type="module">
      import 'notification-banner/notification-banner.js';
    </script>
  </head>
  <body>
    <div style="display:inline-block">
        <notification-banner id="notificationBanner"></notification-banner>
        <button onClick="showSuccessBanner()">Success Banner</button>
    </div>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import 'notification-banner/notification-banner.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <div style="display:inline-block">
            <notification-banner id="notificationBanner"></notification-banner>
            <button onClick="showSuccessBanner()">Success Banner</button>
      </div>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```