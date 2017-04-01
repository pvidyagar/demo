import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { FetchService } from './fetch/fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    MainHeaderComponent,
    LoginComponent,
    LandingComponent,
    AboutComponent,
    MenuComponent,
    Service1Component,
    Service1Component,
    Service2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    FetchService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
