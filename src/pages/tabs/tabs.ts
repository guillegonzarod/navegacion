import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
// Importaciones necesarias:
import { PrincipalPage, AjustesPage } from './../index.paginas';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

tabPrincipal: any;
tabAjustes: any;

constructor() {
  this.tabPrincipal = PrincipalPage;
  this.tabAjustes = AjustesPage;
}


}
