import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SortbyComponent } from './sortby/sortby.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { BrowserComponent } from './browser/browser.component';
import { SortpopularityComponent } from './sortpopularity/sortpopularity.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { SortrelevanceComponent } from './sortrelevance/sortrelevance.component';
import { CatracingComponent } from './catracing/catracing.component';

import { CatsocialComponent } from './catsocial/catsocial.component';
import { CatshooterComponent } from './catshooter/catshooter.component';
import { CatopenworldComponent } from './catopenworld/catopenworld.component';
import { CatzombieComponent } from './catzombie/catzombie.component';
import { CatrpgComponent } from './catrpg/catrpg.component';
import { ActionComponent } from './action/action.component';
import { FlightComponent } from './flight/flight.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},    
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'platforms',canActivate:[AuthGuard],component:PlatformsComponent},
  {path:'browser',canActivate:[AuthGuard],component:BrowserComponent},
  {path:'sortby',canActivate:[AuthGuard],component:SortbyComponent},
  {path:'sortpopularity',canActivate:[AuthGuard],component:SortpopularityComponent},
  {path:'alphabetical',canActivate:[AuthGuard],component:AlphabeticalComponent},
  {path:'sortrelevance',canActivate:[AuthGuard],component:SortrelevanceComponent},
  {path:'racing',canActivate:[AuthGuard],component:CatracingComponent},
  {path:'sports',canActivate:[AuthGuard],component:CatshooterComponent},
  {path:'social',canActivate:[AuthGuard],component:CatsocialComponent},
  {path:'shooter',canActivate:[AuthGuard],component:CatshooterComponent},
  {path:'open',canActivate:[AuthGuard],component:CatopenworldComponent},
  {path:'zombie',canActivate:[AuthGuard],component:CatzombieComponent},
  {path:'rpg',canActivate:[AuthGuard],component:CatrpgComponent},
  {path:'action',canActivate:[AuthGuard],component:ActionComponent},
  {path:'flight',canActivate:[AuthGuard],component:FlightComponent},
  {path:'gamedetails/:id',canActivate:[AuthGuard],component:GamedetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
