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
// FireBase
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ConsultarMuseoService } from './services/consulta-museos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetalleComponent,
    ManualDeUsoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
   /* MatSliderModule,
    MatToolbarModule,
    MatIconModule*/
  ],
  providers: [ConsultarMuseoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
