import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlApi } from '../../commons/varaibles';
/*
  Generated class for the LoginServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServicesProvider Provider');
  }

  getInitSession(params){
  	return new Promise((resolve,reject)=>{
  		this.http.get(urlApi + 'inicioSesion.php',{
  			params : params,
  			observe : 'response'
  		})
  		.toPromise()
  		.then(response =>{
  			resolve(response);
  		})
  		.catch(err =>{
  			reject(err);
  		})
  	})  	
  }
}
