## EDGE-Components-Hackathon-2019

### VideoMedia Component using  AngularMaterial


![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019011/Images/video.png)
![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019011/Images/modal.png)
![alt text](https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019011/Images/scroll.png)


To preview demo of VideomediaComponent, [Click Here](https://angular-2h4j53.stackblitz.io).

### Prerequisites

Download the  VideoMedia component and install the required packages and run the application.


### Installing

```sh
$ npm install
```

### Run Server

```sh
$ ng serve
```

### Adding  VideoMedia component to your project

```sh
<app-video-media title="Title" src="../assets/sheeran.mp4" scroll="250"></app-video-media>
```

### Input for VideoMedia component

```sh
  @Input()  title: string;
  @Input()  src: string;
  @Input()  scroll: number;
```


| Input | Purpose |
| ------ | ------ |
| title |   Title for the component |
| src | Path of video  |
| scroll | To fix the video when exceeded the scroll value  |


#### How it works?

- Hover on play icon, it shows  play inline and modal view options.

- Play option will play the video Inline.

- Modal option will display Modal view to play the video.

- If you scroll down the page then the video is fixed at top-right position.




