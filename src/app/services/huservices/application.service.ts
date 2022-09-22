import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(public fs:AngularFirestore) {
  }

  sortaccepted(hospid:string,docid:string)
  {
    const now = new Date(); 
    const s = now.getFullYear()+"-"+now.getDate()+"-"+now.getMonth();
   
    this.fs.collection("Appointments").doc(hospid).collection(docid).doc("rithiv07@gmail.com").collection(s).get().toPromise().then(x=>x?.forEach(data=>{
      var f1 = data.get('status')
      if(f1==0)
      {
        
      }
    }));
  }
}
