import { ConsultarMuseoService } from './../../services/consulta-museos.service';
import { museoDetalle } from './../../models/museoDetalle';
import { Museo } from './../../models/museo';
import { Component, Input, OnInit, Output } from '@angular/core';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() description: boolean = false;
  @Input() museoDetalle: museoDetalle;
  @Input() museosColombia: Museo;
  @Input() museoMuseo: Museo;

  constructor(museosService: ConsultarMuseoService) { }

  ngOnInit(): void {

  }

  showDescription() :boolean {
    return this.description;
  }

  cerrarVentana() {
    this.description = !this.description;
  }

  mostrarDetalle() {

    console.log(' entro al hijito' + JSON.stringify(this.museoDetalle) ) ;


  }
}
