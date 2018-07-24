import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServicesProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello StorageServicesProvider Provider');
  }

  saveStorage(nameStorage:string,dataStorage:any){
    return new Promise((resolve,reject)=>{
      this.storage.set(nameStorage,dataStorage)
      .then(res => resolve('dataUser9117 save success'));
    });
  }
  
  getStorage(nameStorage:string){
    return new Promise((resolve,reject)=>{
      this.storage.get(nameStorage)
      .then(res => resolve(res));
    });
  }
  deleteStorage(nameStorage:string){
    return new Promise((resolve,reject)=>{
      this.storage.remove(nameStorage)
      .then(res=> resolve(res));
    })
  }

}
