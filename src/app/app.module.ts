import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//services
import { YoutubeService } from "./services/youtube.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    YoutubeService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
