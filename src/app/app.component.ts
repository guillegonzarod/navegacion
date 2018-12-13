import { Ajustes2Page } from './../pages/ajustes2/ajustes2';

import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/index.paginas';
import { Page } from 'ionic-angular/umd/navigation/nav-util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs: Page = TabsPage;
  ajustes2: Page = Ajustes2Page;

  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public abrirPagina($event, pagina: Page): void {
    this.rootPage = pagina;
    this.menuCtrl.close();
  }

}

