import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';


@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mutantes: any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneración acelerada"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes psíquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos inanimados con energía"
    }
  ];

  irPagina3(mutante: any) {
    this.navCtrl.push(Pagina3Page, { 'personaje': mutante });
  }
}
