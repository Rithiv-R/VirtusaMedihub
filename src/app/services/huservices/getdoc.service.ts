import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetdocService {

  constructor(public fs:AngularFirestore) { 
  }

  getter(id:string)
  {
    var temp1: any[]=[];
    this.fs.collection('Doctors').doc(id).get().toPromise().then(data=>{
      var temp = {
        docname:data?.get('name'),
        docimage:data?.get('photo'),
        docoverview:data?.get('overview'),
      }
      temp1.push(temp);
    });
    return temp1;
  }

  getterhosp(hid:string)
  {
    var temp1: any[]=[];
    this.fs.collection('Hospitals').doc(hid).get().toPromise().then(data=>{
      var temp = {
        hosname:data?.get('name'),
        hosimage:data?.get('photo'),
        hosadd:data?.get('address'),
      }
      temp1.push(temp);
    });
    return temp1;
  }
  

  getterpatient(pid:string)
  {
    var temp1: any[]=[];
    this.fs.collection('users').doc(pid).get().toPromise().then(doc=>{
      var temp = {
        u_name:doc?.get('displayName'),
        u_email:pid,
      }
      temp1.push(temp);
    });
    return temp1;
  }
 

}
