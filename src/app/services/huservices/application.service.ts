import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Console } from 'console';
import { EmailAuthCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  accepted!:any [];
  denied!:any[];
  pending!:any [];
    
  constructor(public fs:AngularFirestore) {
  }

  sort(hospid:string,docid:string,patientid:string)
  {
    this.accepted = [];
    this.denied = [];
    this.pending = [];
    const now = new Date(); 
    const s = now.getFullYear()+"-"+now.getDate()+"-"+now.getMonth();
    this.fs.collection("Appointments").doc(hospid).collection(docid).doc(patientid).collection(s).get().toPromise().then(x=>x?.forEach(data=>{
      var f1 = data.get('status')
      if(f1=='0')
      {
        var temp1 = {
          address : data.get('address'),
          attendees: data.get('attendees'),
          date : data.get('date'),
          email: data.get('email'),
          endtime: data.get('endtime'),
          id:data.get('id'),
          name:data.get('name'),
          phone:data.get('phone'),
          reason:data.get('reason'),
          startime: data.get('startime'),
        }
        this.pending.push(temp1)
      }
      else if(f1=='1')
      {
        var temp1 = {
          address : data.get('address'),
          attendees: data.get('attendees'),
          date : data.get('date'),
          email: data.get('email'),
          endtime: data.get('endtime'),
          id:data.get('id'),
          name:data.get('name'),
          phone:data.get('phone'),
          reason:data.get('reason'),
          startime: data.get('startime'),
        }
        this.accepted.push(temp1)
      }
      else if(f1=='-1')
      {
        var temp1 = {
          address : data.get('address'),
          attendees: data.get('attendees'),
          date : data.get('date'),
          email: data.get('email'),
          endtime: data.get('endtime'),
          id:data.get('id'),
          name:data.get('name'),
          phone:data.get('phone'),
          reason:data.get('reason'),
          startime: data.get('startime'),
        }
        this.denied.push(temp1)
      }
      console.log(this.accepted.length,this.denied.length,this.pending.length);
    }));
    return [this.accepted,this.denied,this.pending];
  }
}
