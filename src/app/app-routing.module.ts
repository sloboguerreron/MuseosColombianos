import { MapComponent } from './map/map.component';
import { ManualDeUsoComponent } from './map/manual-de-uso/manual-de-uso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'manualDeUso', component: ManualDeUsoComponent },
  { path: '' , component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
