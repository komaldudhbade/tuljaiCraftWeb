import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CraftAndGiftsComponent } from './pages/craft-and-gifts/craft-and-gifts.component';
import { HandmadeStuffComponent } from './pages/handmade-stuff/handmade-stuff.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactDataService } from './service/contact-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CraftAndGiftsComponent,
    HandmadeStuffComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactDataService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
