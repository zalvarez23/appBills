import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageServicesProvider } from '../../providers/storage-services/storage-services';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storageServices: StorageServicesProvider) {

  }
  ngOnInit(){
  	this.storageServices.getStorage('dataUsuario')
  	.then((res:any)=>{
  		console.log(res);
  	});
  }

}
