import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FourColListComponent } from './four-col-list/four-col-list.component';
import { ThreeColListComponent } from './three-col-list/three-col-list.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchtwoComponent } from './searchtwo/searchtwo.component';
import { NavbarsimpleComponent } from './navbarsimple/navbarsimple.component';
import { NavbaradvComponent } from './navbaradv/navbaradv.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'search', component: SearchComponent },
  { path: 'searchtwo', component: SearchtwoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'three', component: ThreeColListComponent },
  { path: 'four', component: FourColListComponent },

];

@NgModule({
  declarations: [
    NavbarsimpleComponent,
    AppComponent,
    SearchComponent,
    HomeComponent,
    ThreeColListComponent, 
    FourColListComponent, SearchtwoComponent, NavbaradvComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
