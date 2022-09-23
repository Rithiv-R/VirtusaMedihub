import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Console } from 'console';
import { EmailAuthCredential } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  accepted!:any [];
  denied!:any[];
  pending!:any [];
    
  constructor(public fs:AngularFirestore,public router:Router) {
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
          collectionid:data.get('collectionid'),
        }
        this.pending.push(temp1)
      }
      else if(f1=='1')
      {
        var temp1 = {
          address : data.get('address'),
          attendees: data.get('attendees').toString(),
          date : data.get('date'),
          email: data.get('email'),
          endtime: data.get('endtime'),
          id:data.get('id'),
          name:data.get('name'),
          phone:data.get('phone'),
          reason:data.get('reason'),
          startime: data.get('startime'),
          collectionid:data.get('collectionid'),
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
          collectionid:data.get('collectionid'),
        }
        this.denied.push(temp1)
      }
      console.log(this.accepted.length,this.denied.length,this.pending.length);
    }));
    return [this.accepted,this.denied,this.pending];
  }

  accept(hospid:any,docid:any,patientid:any,id:any)
  { 
    const now = new Date(); 
    const s = now.getFullYear()+"-"+now.getDate()+"-"+now.getMonth();
    this.fs.collection("Appointments").doc(hospid).collection(docid).doc(patientid).collection(s).doc(id).update({
    "status":'1',
    }).then(data=>{this.router.navigate(['hospitaluser',hospid,docid,patientid])});
   
  }

  decline(hospid:any,docid:any,patientid:any,id:any)
  { 
    const now = new Date(); 
    const s = now.getFullYear()+"-"+now.getDate()+"-"+now.getMonth();
    this.fs.collection("Appointments").doc(hospid).collection(docid).doc(patientid).collection(s).doc(id).update({
    "status":'-1',
    }).then(data=>{this.router.navigate(['hospitaluser',hospid,docid,patientid])});
   
  }


}
