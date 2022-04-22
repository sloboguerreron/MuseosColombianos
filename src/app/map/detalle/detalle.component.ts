import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() description: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDescription() :boolean {

    return this.description;
  }

  cerrarVentana() {
    this.description = false;
  }
}
