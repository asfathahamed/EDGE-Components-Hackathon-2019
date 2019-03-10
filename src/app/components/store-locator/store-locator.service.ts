import { Injectable } from '@angular/core';
import { Marker } from './store-locator.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreLocatorService {
  public url: string = '/assets/data/store.json';
  constructor(private http: HttpClient) { }
  
  getStoreLocation(): Observable<Marker[]> {
    return this.http.get<Marker[]>(this.url);
  }
}
