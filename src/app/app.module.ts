import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';


import { GetdataService } from './services/getdata.service';
import { ProductResolver } from './services/product-resolver.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TruncatePipe } from './shared/truncate.pipe';
import { CartComponent } from './components/cart/cart.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { WriteReviewComponent } from './components/rating/write-review/write-review.component';
import { StarRatingComponent } from './components/rating/write-review/star-rating/star-rating.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreLocatorComponent } from './components/store-locator/store-locator.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'store', component:StoreLocatorComponent},
  {path:'products', component:ProductListComponent},
  {path:'cart', component:CartComponent},
  {
    path:'product/:id', 
    component:ProductComponent,
    resolve: {
      product: ProductResolver
    }   
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    TruncatePipe,
    CartComponent,
    OrderSummaryComponent,
    ProductComponent,
    RatingComponent,
    WriteReviewComponent,
    StarRatingComponent,
    FooterComponent,
    StoreLocatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      /** mention your own API key from URL: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en **/
      apiKey: 'AIzaSyC8sFSOTxhIg1Z86kecZued5oQbYaO4Lc0'
    })
  ],
  providers: [GetdataService, ProductResolver, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
