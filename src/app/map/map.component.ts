import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, SystemJsNgModuleLoader} from '@angular/core';
import { info } from 'console';
import * as L from 'leaflet';
import { Button } from 'protractor';


import { ConsultarService } from '../services/consultar.service';
import { ConsultarMuseoService } from '../services/consulta-museos.service';

import { Museo } from '../models/museo';
import { Consulta } from './../models/Consulta';
import { museoDetalle } from './../models/museoDetalle';
import { stringify } from 'querystring';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//import {  } from '../services/consulta-museos.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;
  public showDescription: boolean;
  //museos lista
  museos = { count: 0, data: [] };
  public museosColombia: Museo[] = [];
  public museoDetalle: museoDetalle[] = [];
  public numeroMuseo: number = 0;
  public museoMuseo: Museo[] = [];

  constructor(private http: HttpClient, private service: ConsultarService, private museosService: ConsultarMuseoService) {
    //private serviceMuseo: ConsultarServiceMuseo
  }

  ngOnInit(): void {
    this.museosService.listaMuseosService().subscribe(resp => {
      this.museos.data = resp.map((e: any) => {
        return {
          id: e.payload.doc.data().id,
          nombre_museo: e.payload.doc.data().nombre_museo,
          ciudad: e.payload.doc.data().ciudad,
          coordenadasX: e.payload.doc.data().coordenadasX,
          coordenadasY: e.payload.doc.data().coordenadasY,
        }
      })
      this.organizarTodosMuseos();
    });

  }

  public organizarTodosMuseos() {
    // guarda todos los museos que tiene
    for (let i = 0; i < this.museos.data.length; i++) {
      this.museosColombia.push(this.museos.data[i]);
    }
    //cuadrar los popup
    for (let i = 0; i < this.museosColombia.length; i++) {
      var markerGeneralcito = L.marker([this.museosColombia[i]['coordenadasX'], this.museosColombia[i]['coordenadasY']]).addTo(this.map);
      let nombremuseo = this.museosColombia[i]['nombre_museo'];
      let ciudadmuseo = this.museosColombia[i]['ciudad'];
      let numMuseo = this.museosColombia[i]['id'];
      const _this = this;
      let botonGeneralcito = document.createElement('button');
      botonGeneralcito.onclick = function () {
        _this.submitDetalleMuseos(nombremuseo, ciudadmuseo, numMuseo );
      }
      let saltoLinea = document.createElement('br');
      //botonGeneralcito.className = "button";
      botonGeneralcito.setAttribute("style", "border-radius: 5px; background-color: #f95568; color:white;")
      botonGeneralcito.innerHTML = "Detalle Museo";
      let infoMuseoGeneral = document.createElement('b');
      infoMuseoGeneral.innerHTML = this.museosColombia[i]['nombre_museo'] ;
      let divMuseoGeneral = document.createElement('div');
      divMuseoGeneral.append(infoMuseoGeneral);
      divMuseoGeneral.append(saltoLinea);
      divMuseoGeneral.append(saltoLinea);
      divMuseoGeneral.append(botonGeneralcito);

      markerGeneralcito.bindPopup(divMuseoGeneral).openPopup();
    }
  }


  public submitDetalleMuseos(nombre_museo: string, ciudad: string, numMuseo){
    let consultaMuseo: Consulta = {
      nombreMuseo: nombre_museo,
      ciudad: ciudad
    }
    //agregar la consulta de firebase
    this.museosService.consultarMuseo(numMuseo).subscribe((data) =>
      {
        this.museoMuseo = [];
        console.log(data[0]);
        let museo: Museo = {
          id: data[0]['id'],
          nombre_museo: data[0]['nombre_museo'],
          ciudad: data[0]['ciudad'],
          coordenadasX: data[0]['coordenadasX'],
          coordenadasY: data[0]['coordenadasY']
        }
        this.museoMuseo.push(museo);

      }
    )
    // consultar api de back
    this.service.getMuseo(consultaMuseo).subscribe((data) =>
      {
        this.museoDetalle = [];
        console.log(data);
        this.museoDetalle.push(data[0]);
      });

      this.showDescription = !this.showDescription;
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [4.655011, -74.089214],
      zoom: 6.5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }





}
