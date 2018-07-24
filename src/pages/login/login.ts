import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaderServicesProvider } from '../../providers/loader-services/loader-services';
import { LoginServicesProvider } from '../../providers/login-services/login-services';
import { TabsPage } from '../../pages/tabs/tabs';
import { StorageServicesProvider } from '../../providers/storage-services/storage-services';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',	
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public loadingCtrl : LoaderServicesProvider, public loginServices: LoginServicesProvider,
  	public storageServices: StorageServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  objSession:any = {
  	usu: '',
  	pass: ''	
  }
  initSession(){
  	let loader = this.loadingCtrl.getLoading('Iniciando sesión. .','1');	

  	this.loginServices.getInitSession(this.objSession)
  	.then((res:any)=>{
  		setTimeout(()=>{
	  		if (res.body[0] == "ERROR") {
	  			loader.dismiss();
	  			this.loadingCtrl.getAlertBasic('Error','Usuario y/o Contraseña incorrectos.');
	  		}else{
	  			loader.dismiss();
	  			this.storageServices.saveStorage('dataUsuario',res.body[0])
	  			.then((res)=>{
	  				this.navCtrl.push(TabsPage)
	  			});
	  			
	  		}
  		},1000);
  		
  	},(err)=>{
  		this.loadingCtrl.getAlertBasic('Error','Ocurrio un problema con la conexión.');
  		console.log(err);
  	})


  	//

	/*setTimeout(() => {
	  loader.dismiss();
	}, 5000);*/
  }


}
