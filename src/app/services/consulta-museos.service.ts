import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { museoDetalle } from '../models/museoDetalle';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ConsultarMuseoService {
  constructor( private firestore: AngularFirestore) { }

  public listaMuseosService() {
    return this.firestore.collection("museos").snapshotChanges();
  }
}
