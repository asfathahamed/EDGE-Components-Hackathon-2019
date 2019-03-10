import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Marker } from './store-locator.model';
import { StoreLocatorService } from './store-locator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css']
})
export class StoreLocatorComponent implements OnInit {
  private subscription: Subscription;
  zoom: number = 10;
  markers: Marker[] = [];
  lat: number = 28.599946460128677;
  lng: number = 77.33907244048214;
  
  constructor(private storeLocatorService: StoreLocatorService){}

  ngOnInit() {
    this.subscription = this.storeLocatorService.getStoreLocation().subscribe(
      (data) => {
        this.markers = data;
      });

      console.log(this.markers)
  }

  /* clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

 */
  
  onSelectLocation($event: MouseEvent) {
    console.log("lat: " + $event.coords.lat + "lng : " + $event.coords.lng);
    
  } 
}


  
