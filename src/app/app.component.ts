import { ConsultarService } from './services/consultar.service';
import { ConsultarMuseoService } from '../app/services/consulta-museos.service';
import { Consulta } from './models/Consulta';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Museo } from './models/museo';
import { museoDetalle } from './models/museoDetalle';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  nombre_museo : string;
  public museoBuscar: Museo[] = [];
  public museoDetalleBuscar: museoDetalle[] = [];
  public showDescription: boolean;
  //nombre_museo = "";
  constructor(private service: ConsultarService, private museosService: ConsultarMuseoService) { }

  public buscarMuseo() {

    console.log('este el nombre:');
    console.log(this.nombre_museo);

    this.nombre_museo = this.nombre_museo.toLowerCase();
    this.museosService.consultarMuseoNombre(this.nombre_museo).subscribe((data) => {
      this.museoBuscar = [];
      if (data[0]) {
        let museo: Museo = {
          id: data[0]['id'],
          nombre_museo: data[0]['nombre_museo'],
          ciudad: data[0]['ciudad'],
          direccion: data[0]['direccion'],
          coordenadasX: data[0]['coordenadasX'],
          coordenadasY: data[0]['coordenadasY']
        }
        this.museoBuscar.push(museo);
        console.log(this.museoBuscar[0])
        //consulta back

        let consultaMuseo: Consulta = {
          nombreMuseo: this.museoBuscar[0]['nombre_museo'],
          ciudad: this.museoBuscar[0]['ciudad']
        }
        this.service.getMuseo(consultaMuseo).subscribe((ref) => {
          this.museoDetalleBuscar = [];
          console.log(ref);
          this.museoDetalleBuscar.push(ref[0]);
        });

        this.showDescription = !this.showDescription;
      } else {
        Swal.fire(
          'No se encuentra Museo',
          'verifique el nombre del museo que desea buscar',
          'error'
        )
      }
    });
    this.nombre_museo = "";
  }
}
