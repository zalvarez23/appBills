import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StorageServicesProvider } from '../providers/storage-services/storage-services';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storageServices: StorageServicesProvider) {
    platform.ready().then(() => {
      
      storageServices.getStorage('dataUsuario').then((res)=>{        
        if (res == null) {
          this.rootPage = LoginPage;
        }else{
          this.rootPage = TabsPage;
        }
      })
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      // set status bar to white
      statusBar.backgroundColorByHexString('#cc3838');    
      splashScreen.hide();
    });

  }
}
