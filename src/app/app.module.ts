import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDecriptionComponent } from './product-decription/product-decription.component';
import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDecriptionComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
