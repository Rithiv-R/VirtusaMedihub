import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc } from 'firebase/firestore';
import { user } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class PatientselectService {

  constructor(private fs:AngularFirestore) { }

  findpatient(hospname:string,docid:string)
  {
    console.log('1');
    var tempo:any[] = [];
    this.fs.collection('Appointments').doc(hospname).collection(docid).get().toPromise().then(data=>{data?.forEach(val=>{
      this.fs.collection('users').doc(val.id).get().toPromise().then(doc=>{
        var temp1 = {
          u_name:doc?.get('displayName'),
          u_email:val.id,
        }
        tempo.push(temp1);
      });
    })});
    return tempo;
  }

}
