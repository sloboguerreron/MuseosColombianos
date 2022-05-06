import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, SystemJsNgModuleLoader } from '@angular/core';
import { info } from 'console';
import * as L from 'leaflet';
import { Button } from 'protractor';


import { ConsultarService } from '../services/consultar.service';
import { ConsultarMuseoService } from '../services/consulta-museos.service';

import { Museo } from '../models/museo';
import { Consulta } from './../models/Consulta';
import { museoDetalle } from './../models/museoDetalle';
import { stringify } from 'querystring';

//import {  } from '../services/consulta-museos.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;
  public showDescription: boolean;
  //public museoDetalle: museoDetalle;
  //museos lista
  museos = { count: 0, data: [] };
  museosColombia: Museo[] = [];

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
    for (let i = 0; i < this.museos.data.length; i++) {
      this.museosColombia.push(this.museos.data[i]);
    }

    //cuadrar los popup
    for (let i = 0; i < this.museosColombia.length; i++) {
      var markerGeneralcito = L.marker([this.museosColombia[i]['coordenadasX'], this.museosColombia[i]['coordenadasY']]).addTo(this.map);
      let nombremuseo = this.museosColombia[i]['nombre_museo'];
      let ciudadmuseo = this.museosColombia[i]['ciudad'];
      const _this = this;
      let botonGeneralcito = document.createElement('button');
      botonGeneralcito.onclick = function () {
        _this.submitDetalleMuseos(nombremuseo, ciudadmuseo);
      }
      botonGeneralcito.innerHTML = "Detalle Museo";
      let infoMuseoGeneral = document.createElement('b');
      infoMuseoGeneral.innerHTML = this.museosColombia[i]['nombre_museo'];
      let divMuseoGeneral = document.createElement('div');
      divMuseoGeneral.append(infoMuseoGeneral);
      divMuseoGeneral.append(botonGeneralcito);

      markerGeneralcito.bindPopup(divMuseoGeneral).openPopup();
    }
  }

  public submitDetalleMuseos(nombre_museo: string, ciudad: string){
    let consultaMuseo: Consulta = {
      nombreMuseo: nombre_museo,
      ciudad: ciudad
    }
    this.service.getMuseo(consultaMuseo);
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
    //medellin
    var markerMuseoCasaDeLaMemoria = L.marker([6.245804, -75.556752]).addTo(this.map);
    var markerMuseosArteModerno = L.marker([6.223986, -75.573943]).addTo(this.map);
    var markerMuseoDelAguaEPM = L.marker([6.244853, -75.576229]).addTo(this.map);
    //cartagena
    var markerSantuarioYMuseoSantaMaria = L.marker([10.369389, -75.505195]).addTo(this.map);
    var markerMuseoDelCacao = L.marker([10.426489, -75.548391]).addTo(this.map);
    var markerMuseoNaval = L.marker([10.421848, -75.552194]).addTo(this.map);
    //cali
    var markerMuseoDeLaSalsa = L.marker([3.448514, -76.518694]).addTo(this.map);
    var markerMuseoDeArteLibre = L.marker([3.466199, -76.523133]).addTo(this.map);
    var markerMuseoArqueologicoLaMerced = L.marker([3.450586, -76.536703]).addTo(this.map);

    markerMuseoCasaDeLaMemoria.bindPopup("<b> Museo Casa de la Memoria.").openPopup();
    markerMuseosArteModerno.bindPopup("<b> Museo Arte Moderno.").openPopup();
    markerMuseoDelAguaEPM.bindPopup("<b> Museo Del Agua EPM.").openPopup();

    markerSantuarioYMuseoSantaMaria.bindPopup("<b> Santuario y Museo Santa Maria.").openPopup();
    markerMuseoDelCacao.bindPopup("<b> Museo Del Cacao.").openPopup();
    markerMuseoNaval.bindPopup("<b> Museo Naval.").openPopup();

    markerMuseoDeLaSalsa.bindPopup("<b> Museo De La Salsa.").openPopup();
    markerMuseoDeArteLibre.bindPopup("<b> Museo De Arte Libre.").openPopup();
    markerMuseoArqueologicoLaMerced.bindPopup("<b> Museo Arueologico laMerced.").openPopup();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }





}
