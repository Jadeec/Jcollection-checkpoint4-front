import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { VinylsComponent } from './vinyl/vinyls.component';
import { CdsComponent } from './cd/cds.component';
import { DvdsComponent } from './dvd/dvds.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { ModifyFormComponent } from './forms/modify-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CreationFormComponent } from './forms/creation-form.component';
import { CdComponent } from './cd/cd.component';
import { DvdComponent } from './dvd/dvd.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VinylsComponent,
    CdsComponent,
    DvdsComponent,
    VinylComponent,
    ModifyFormComponent,
    CardComponent,
    CreationFormComponent,
    CdComponent,
    DvdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
