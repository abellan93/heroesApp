import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems = [
    {
      label:'Listar',icon:'fas fa-list',link:'./list'
    },
    {
      label:'Añadir',icon:'fas fa-plus',link:'./new-hero'
    },
    {label:'Buscar',icon:'fas fa-search',link:'./search'}
  ]

}
