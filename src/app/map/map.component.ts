import { Component, OnInit, NgZone, Input, OnChanges, SimpleChanges } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  title = 'app';
  placeText: string;
  map: any;
  showLoader: boolean;
  markers = [];
  placeTypeMarker = [];

  @Input() location: string;
  @Input() type: string;
  @Input() toLocation: string;
  @Input() placeType: string;
  @Input() isPopularPlace: boolean;
  search: string;
  directionsService;
  directionsDisplay;
  showPlace: boolean;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.showLoader = true;
    this.showPlace = false;
    this.search =  this.placeType.toUpperCase();
    this.initAutocomplete();
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
  }

  ngOnChanges() {
    if (this.type === 'direction' && this.toLocation && this.toLocation !== null) {
      this.showLoader = true;
      this.showPlace = false;
      this.removePlaceMarker(null);
      this.getDirections().then(() => {
        this.showLoader = false;
      });
    }
    if (this.location && this.type === 'location') {
      this.search =  this.placeType.toUpperCase();
      this.directionsDisplay.set('directions', null);
      this.showLoader = true;
      this.showPlace = true;
      setTimeout(() => {this.getLocation(this.location).then(() => {
        this.showLoader = false;
      });
    }, 100);
    }
  }

  getDirections() {
    return new Promise((resolve, reject) => {
      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.set('directions', null);
      const directionsDisplay = this.directionsDisplay;
      this.directionsService.route({
        origin: this.location,
        destination: this.toLocation,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          resolve();
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
  }

  initAutocomplete() {
    this.map = new google.maps.Map(document.getElementById('map-info'), {
      center: { lat: 21.7679, lng: 78.8718 }, // india lat and langitude
      zoom: 5,
      mapTypeControl: false // remove map and satellite option in google map
    });
    this.showLoader = false;
    // from location google autocomplete
    const autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('fromLocation') as HTMLInputElement),
      { types: ['geocode'] });

    // place change action listener
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.getPlaceSuggestion(autocomplete);
    });

    // to location google autocomplete
    const autocompleteFromLocation = new google.maps.places.Autocomplete(
      (document.getElementById('toLocation') as HTMLInputElement),
      { types: ['geocode'] });

    // place change action listener
    google.maps.event.addListener(autocompleteFromLocation, 'place_changed', () => {
      this.getPlaceSuggestion(autocompleteFromLocation);
    });
  }

  getPlaceSuggestion(autocomplete) {
    this.zone.run(() => {
      this.placeText = '';
    });
    const place = autocomplete.getPlace();
    this.zone.run(() => {
      this.placeText = place.formatted_address;
    });
  }


  removeMarker(map) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
    this.markers = [];
  }
  removePlaceMarker(map) {
    for (let i = 0; i < this.placeTypeMarker.length; i++) {
      this.placeTypeMarker[i].setMap(map);
    }
    this.placeTypeMarker = [];
  }

  getLocation(location) {
    return new Promise((resolve, reject) => {
      let getNextPage = null;
      let moreButton;
      if (this.isPopularPlace) {
      moreButton = (document.getElementById('more') as HTMLInputElement);
      document.getElementById('places').innerHTML = '';
      moreButton.onclick = function () {
        moreButton.disabled = true;
        if (getNextPage) { getNextPage(); }
      };
    }
      this.showLoader = true;
      const placeRequest = {
        query: location,
        fields: ['name', 'geometry'],
      };
      const service = new google.maps.places.PlacesService(this.map);
      const map = this.map;
      this.removeMarker(null);
      this.removePlaceMarker(null);
      const marker = this.markers;
      const placeMarker = this.placeTypeMarker;
      const placeType = this.placeType;
      const isPopularPlace = this.isPopularPlace;
      // finding places
      service.findPlaceFromQuery(placeRequest, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            marker[i] = new google.maps.Marker({
              map: map,
              position: results[i].geometry.location
            });
          }
          map.setCenter(results[0].geometry.location);
          map.zoom = 15;
          const nearByRequest = {
            location: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
            radius: '500',
            type: placeType
          };
        // Near by place search
         if (isPopularPlace) {
          service.nearbySearch(nearByRequest, function (nearByResults, naerByStatus, pagination) {
            if (naerByStatus !== 'OK') { return; }
            const bounds = new google.maps.LatLngBounds();
            const placesList = document.getElementById('places');

            for (let i = 0, place; place = nearByResults[i]; i++) {
              const image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
              };

              placeMarker[i] = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
              });

              const li = document.createElement('li');
              li.textContent = place.name;
              placesList.appendChild(li);

              bounds.extend(place.geometry.location);
            }
            map.fitBounds(bounds);
            moreButton.disabled = !pagination.hasNextPage;
            getNextPage = pagination.hasNextPage && function () {
              pagination.nextPage();
            };
          });
        }
        resolve();
      }
      });
    });
  }
}
