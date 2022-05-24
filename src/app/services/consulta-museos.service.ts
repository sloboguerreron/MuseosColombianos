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

  public consultarMuseo(id) {
    return this.firestore.collection('museos', ref =>   ref.where('id', '==', id)).valueChanges();
  }

  public consultarMuseoNombre(nombreMuseo) {
    return this.firestore.collection('museos', ref => ref.where("nombre_museo", "==", nombreMuseo)).valueChanges();
  }
}
