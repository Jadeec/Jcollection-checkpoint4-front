import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { VinylsComponent } from './vinyl/vinyls.component';
import { CdsComponent } from './cd/cds.component';
import { DvdsComponent } from './dvd/dvds.component';
import { VinylComponent } from './vinyl/vinyl.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VinylsComponent,
    CdsComponent,
    DvdsComponent,
    VinylComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
