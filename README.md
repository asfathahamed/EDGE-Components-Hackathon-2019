# Video Midea Component

Video Media Component is a web component developed using angular 7 for video scrolling
if user scroll the webpage video also scroll as per user requirement.

## Output Format for Desktop view
<p align='center'><img src="./video media.png"></p>

  


To preview demo of video media Component [click here](https://angular-egsoov.stackblitz.io/)


## Getting Started
We can either use only the Video Media Component as a re-usable component

Download the Video media.component to your angular project and include required packages and run the application.

```
  
  <video controls class="video" appScroll="250"> 
  <source src="https://d1y6jrbzotnyjg.cloudfront.net/SRNPL/304316e52ea14e47a41207eee25f3430/V28/76f09b15e846408a9e42466ccc80ac64/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4?Expires=1552461142&Signature=Jqbrw4laJQgLtYydY-VumBnvAA-TPfjOvg1M7OCixYt8iQucEK6eYEcfCaVstxVrMmwLxOigOjtP4ZDHjrpMsSZEsfaLCD828IVDw-pMz9cMq0bp8xHtOoNZL552LCYwcC4dZySYwqM8vJlnLwxf7YNiCuxvy2m4EUPVDZ1mvNU_&Key-Pair-Id=APKAJ62XWKZ35EOVO4XA" type="video/mp4">
  
  </video>

```

appscroll input propertie are passed to the 
Video Media Component.

### Installing
Following packages need to install in project
```
npm install
```
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Properties we need to pass into the Video Media Component

### Appscroll

If user will scroll the webpage give input value to scroll directive





