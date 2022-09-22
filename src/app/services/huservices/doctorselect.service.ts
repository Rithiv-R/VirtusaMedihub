import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorselectService {

  constructor(private fs:AngularFirestore) { }

  fetchdoctor(hospname:string)
  {
    var tempo:any[] = [];
    this.fs.collection("Hospitals").doc(hospname).get().toPromise().then((val)=>{
      var x = val?.get('doctors');
      x.forEach((element:any) => {
        this.fs.collection('Doctors').doc(element).get().toPromise().then((doc)=>{
          var tempo2 = {
            doc_name:doc?.get('name'),
            doc_photo:doc?.get('photo'),
            doc_regno:doc?.get('regno'),
          }
          tempo.push(tempo2);
        });
      });
    });
    return tempo;
  }

}
