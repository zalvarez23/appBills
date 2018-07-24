
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the LoaderServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderServicesProvider {

  constructor(public loadingCtrl : LoadingController, public alertCtrl: AlertController) {
    console.log('Hello LoaderServicesProvider Provider');
  }

  getLoading(textBody:string,spinner:string){
	  let loading = this.loadingCtrl.create({
	    content: `<p>${textBody}</p>`,
      cssClass: 'loader1'
	  });

	  loading.present();
    return loading;
  }
  getAlertBasic(title:string, subtitle:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Ok']
    });
    alert.present();
    return alert;
  }
}
