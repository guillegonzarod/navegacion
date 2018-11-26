import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  activarPrincipal() {
    this.navCtrl.parent.select(0);
  }

  mostrar_modal() {
    let modal = this.modalCtrl.create(ModalPage, { nombre: "Guille", edad: 10 });
    modal.present();

    modal.onDidDismiss(parametros => {
      if(parametros){
        console.log("Datos del modal:");
        console.log(parametros);
      }else{
        console.log("Se cerró el modal sin parámetros");
      }

    });
  }

}
