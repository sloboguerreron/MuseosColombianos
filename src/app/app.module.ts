import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DetalleComponent } from './map/detalle/detalle.component';

import { HttpClientModule } from "@angular/common/http";
import { ManualDeUsoComponent } from './map/manual-de-uso/manual-de-uso.component';

//import { MatSliderModule } from '@angular/material/slider';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetalleComponent,
    ManualDeUsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   /* MatSliderModule,
    MatToolbarModule,
    MatIconModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
