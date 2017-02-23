
import { FourColListComponent } from './four-col-list/four-col-list.component';
import { ThreeColListComponent } from './three-col-list/three-col-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchComponent,
    HomeComponent,
    ThreeColListComponent, FourColListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
