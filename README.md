# Ers Hachathon Challenge - 2019

This project contains below components for the hackathon challenge 2019,

- Locate on map
- Timeout component
- Pagination
- Table component

### Demo Links

[Locate me on map - without image gallery](https://locate-on-map-without-gallery.stackblitz.io/)

[Locate me on map - with image gallery](https://locate-on-map-lyuyrx.stackblitz.io/)

[Table component](https://pariwvqz.github.stackblitz.io/)

### Component 1: Locate on map

Using this component user can search the places and can view the places on the map with various *icon*, *photos near by*, *address details*, *rating*, *review*, etc.

#### How to use Loacte on map component

The component can be used using the tag i.e *<locate-on-map></locate-on-map>* in any of your parent component where you want to use.

Apart from using the component tag, you have to follow the below steps as you will access the *Google Map* API for doing the *Geocoding*, *Text auto search*, etc.

#### Step 1 ( Getting the Google API Key )

Usually Google do not let you access the their cloud APIs with having the access key. To get the Google API Key, please [click]( https://developers.google.com/maps/documentation/javascript/get-api-key).

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%201.png)

Pick the product which you want to use and click next

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%202.png)

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%203.png)

Select the project, you can choose *My Project* or you can create a project and click next

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%207.png)

Create your billing account for the selected project

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%208.png)

Select your country and check the *Terms of service* and click on *AGREE AND CONTINUE*

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%209.png)

Provide your basic personnal information and click next

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%2010.png)

**Note:** It will ask you to provide *Credit Card* or *Debit Card* information, you can provide and just for checking they may take *1 INR*. For 1 year the *Key* will be free post you have to pay if you wish to continue.  

Finally a pop-up having a *Key* will be shown to you

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Google%20API%20Key%20-%2011.png)

#### Step 2 ( Configure the Google API Key into your application )

Place the following script with your API Key in your root HTML file,

*<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" type="text/javascript"></script>*

As this is an Angular application, so you have to place the script in your *index.html* file.

#### Step 3 ( Install the required typings )

As you use typesting in your Angular application, directly you cant you the Google map objects because of type error. To avoid this please install ony one of the following typings plugin.
  
  `npm i @types/google-maps`
  
  *OR*
  
  `npm i @types/googlemaps`

For this application `@types/google-maps`is being used.

#### Step 3 ( Without installing typings )

There is also an alternative way to avoiding typing error is by using declare key word as mentioned below,

  `declare var google: any;`

#### Step 4 ( How to use the component )

To use this component you can use *<locate-on-map>* in your any of the parent component. And you can follow the attribute section for proving the inputs to the component. The component looks as provided below,
  
When component loads to the browser

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Component%20-%201.png)

It will ask you on browser location, either you can click *Allow* or *Block*.

If you click *Allow* then it will take you browser location lattitude and logitude.

If you click *Block* the it will show the component's *defaultMapPosition*. You can also provide input for *defaultMapPosition*.

Finally the component gets load as below

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Component%20-%202.png)

You can search and select a location in the input auto complete suggestion

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Component%20-%205.png)
  
If you click the marker, it shows you an *Info WIndow* having imformation like *Address details*, *Contact Info*, *Open Hours*, *Working Schedules of the week*, *Rating*, *User reviews* and *Photo gallery* if available for the place you have searched.

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Component%20-%203.png)

![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019005/src/assets/Component%20-%204.png)


### Locate on Map

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
