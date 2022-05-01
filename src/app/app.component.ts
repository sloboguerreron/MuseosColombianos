import { ConsultarService } from './services/consultar.service';
import { Consulta } from './models/Consulta';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'museosColombia';

  constructor(private service: ConsultarService){}

  public buscarMuseo(){
    let consulta: Consulta = {
      nombreMuseo: "museo del oro",
      ciudad: "Bogotá"
    }
    this.service.getMuseo(consulta);

  }

}

