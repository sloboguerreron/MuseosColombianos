import { ConsultarService } from './services/consultar.service';
import { ConsultarMuseoService } from '../app/services/consulta-museos.service';
import { Consulta } from './models/Consulta';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  public cambioDeVentana: Boolean = false;
  constructor(private service: ConsultarService,  private museosService: ConsultarMuseoService){}



  public buscarMuseo(){
    let consulta: Consulta = {
      nombreMuseo: "museo del oro",
      ciudad: "Bogotá"
    }
    this.service.getMuseo(consulta);
  }
}
