import { Component, AfterViewInit, SystemJsNgModuleLoader } from '@angular/core';
import { info } from 'console';
import * as L from 'leaflet';
import { Button } from 'protractor';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;
  public showDescription: boolean = false;

  //boton
  public button = '<input type="button" onclick="submitDetalle" value="Detalle Museo" id="num_parrafos" name="DetalleMuseo"/>';

  public submitDetalle(){
    this.showDescription = true;
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 4.655011, -74.089214 ],
      zoom: 6.5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    //bogota
    var markerMuseoBotero = L.marker([4.596736, -74.072983]).addTo(this.map);
    var markerMuseoCasaMoneda = L.marker([4.597059, -74.073474]).addTo(this.map);
    var markerMuseoDelOro = L.marker([4.601919, -74.072]).addTo(this.map);
    var markerMuseoNacional = L.marker([4.615798, -74.068842]).addTo(this.map);
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

    const _this = this;
    let botonMuseoNacional = document.createElement('button');
    botonMuseoNacional.onclick = function() {
      _this.submitDetalle();
    }
    botonMuseoNacional.innerHTML = "Detalle Museo";
    let infoMuseoNacional = document.createElement('b');
    infoMuseoNacional.innerHTML = "Museo Nacional.";
    let divMuseoNacional = document.createElement('div');
    divMuseoNacional.append(infoMuseoNacional);
    divMuseoNacional.append(botonMuseoNacional);


    markerMuseoBotero.bindPopup("<b> Museo Botero.").openPopup();
    markerMuseoCasaMoneda.bindPopup("<b> Museo Casa Moneda. </b> <br> detalle").openPopup();
    markerMuseoDelOro.bindPopup("<b> Museo del Oro.").openPopup();
    //markerMuseoNacional.bindPopup("<b> Museo Nacional. <br>"+this.button).openPopup();
    markerMuseoNacional.bindPopup(divMuseoNacional).openPopup();

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


  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  funcionDetallewrapper (){
    console.log('entre al boton')
  }

}
