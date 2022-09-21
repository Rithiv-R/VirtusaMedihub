import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private fs:AngularFirestore) {
  }

  addappointment(name:string,email:string,attendees:Number,address:string,phone:Number,date:Date,starttime:string,endtime:string,reason:string,docreg:string,hospname:string,useremail:string)
  {
    const now = new Date(); 
    const mission = now.getHours()+"."+now.getMinutes()+"."+now.getSeconds();
    const s = now.getFullYear()+"-"+now.getDate()+"-"+now.getMonth();
    this.fs.collection('Appointments').doc(hospname).collection(docreg).doc(useremail).collection(s.toString()).doc(mission.toString()).set(
      {
        name:name,
        email:email,
        attendees:attendees,
        address:address,
        phone:phone,
        date:date,
        starttime:starttime,
        endtime:endtime,
        reason:reason,
        id:mission.toString(),
      }
    ).then(()=>console.log('Successfully Added'));
  }
}
