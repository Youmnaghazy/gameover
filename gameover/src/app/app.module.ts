import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortbyComponent } from './sortby/sortby.component';
import { RegisterComponent } from './register/register.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { BrowserComponent } from './browser/browser.component';
import { SortpopularityComponent } from './sortpopularity/sortpopularity.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { SortrelevanceComponent } from './sortrelevance/sortrelevance.component';
import { CatracingComponent } from './catracing/catracing.component';

import { CatsocialComponent } from './catsocial/catsocial.component';
import { CatshooterComponent } from './catshooter/catshooter.component';
import { CatopenworldComponent } from './catopenworld/catopenworld.component';
import { CatzombieComponent } from './catzombie/catzombie.component';
import { ActionComponent } from './action/action.component';
import { CatrpgComponent } from './catrpg/catrpg.component';
import { FlightComponent } from './flight/flight.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    AllComponent,
    PlatformsComponent,
    SortbyComponent,
    RegisterComponent,
    GamedetailsComponent,
    BrowserComponent,
    SortpopularityComponent,
    AlphabeticalComponent,
    SortrelevanceComponent,
    CatracingComponent,
    CatsocialComponent,
    CatshooterComponent,
    CatopenworldComponent,
    CatzombieComponent,
    ActionComponent,
    CatrpgComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
