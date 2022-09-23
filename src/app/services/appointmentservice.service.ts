import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { documentId } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private fs:AngularFirestore,public router:Router) {
  }

  addappointment(name:string,email:string,attendees:Number,address:string,phone:Number,date:Date,starttime:string,endtime:string,reason:string,docreg:string,hospname:string,useremail:string)
  {
    const now = new Date(); 
    const mission = now.getHours()+"."+now.getMinutes()+"."+now.getSeconds();
    const s = now.getFullYear()+"-"+now.getDate()+"-"+now.getMonth();
    var s1= this.fs.collection('Appointments').doc(hospname)
    s1.set({name:hospname});
    var s2 = s1.collection(docreg).doc(useremail);
    s2.set({name:useremail});
    s2.collection(s.toString()).doc(mission.toString()).set(
      {
        name:name,
        email:email,
        attendees:attendees.toString(),
        address:address,
        phone:phone.toString(),
        date:date,
        startime:starttime.toString(),
        endtime:endtime.toString(),
        reason:reason,
        id:mission.toString(),
        status:"0",
        collectionid:s.toString(),
      }
    ).then(()=>{
    var ref = this.fs.collection("Requests").doc(useremail);
    ref.set({
      useremail:useremail,
    })
    ref.collection('sent').add({
      hospid:hospname,
      docid:docreg,
      patientid:useremail,
      collectionid:s.toString(),
      documentid:mission.toString(),
    }).then(()=>{window.alert('Appointment Successfully Added!!'); this.router.navigate([""]);});
    }
    )
  }
}
