import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement, ElementRef, Renderer2 } from "@angular/core";
import { of } from "rxjs";
import { MatDialog } from "@angular/material";

import { By } from "@angular/platform-browser";
import { VideoComponent } from "./video.component";

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({ action: true })
    };
  }
}

describe("VideoComponent", () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let openModalDailog;
  let getSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent],
      providers: [{ provide: MatDialog, useValue: { MatDialogMock } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css("#modal"));
    element = debugElement.nativeElement;
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it("should have the title", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".title")).toBeTruthy();
  });

  it("should render app with video tag", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("video")).toBeTruthy();
  });

  it("should render video tag with pause to be truthy", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("video").pause).toBeTruthy();
    expect(compiled.querySelector("video").controls).toBeFalsy();
  });

  it("should render video tag and contains child element source", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("video source")).toBeTruthy();
    expect(compiled.querySelector("video source").src).toBeTruthy();
  });

  it("app should contains dropup", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("div.dropup")).toBeTruthy();
  });

  it("app should contains img tag", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("div.dropup img").src).toBeTruthy();
    expect(compiled.querySelector("div.dropup img").alt).toBeTruthy();
  });

  it("app should contains dropdown controls", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector("div.dropup div.dropup-content")
    ).toBeTruthy();
  });

  it("app should contains dropdown controls of play and model", () => {
    fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("div.dropup-content a").click).toBeTruthy();
  });

  it("should display the `Modal` button", () => {
    expect(element.innerText).toContain("Modal");
  });

  it("should not display the modal unless the button is clicked", () => {
    const modals = fixture.debugElement.query(By.css("#modal"));
    modals.triggerEventHandler("click", null);
    expect(component.showModal).toBeFalsy();
  });

  it("should display Modal when Modal is  clicked", () => {
    openModalDailog = jasmine.createSpyObj("VideoComponent", ["openDialog"]);

    getSpy = openModalDailog.openDialog.and.returnValue(true);
    expect(getSpy).toBeTruthy();
  });
  it("should play the video", () => {
    const play = component.play();
    expect(play).toBe(true);
  });
  it("should open the dialog", () => {
    expect(MatDialogMock.prototype.open).toBeTruthy();
  });
});
