import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { SIGUSR2 } from 'constants';

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
    var s1= this.fs.collection('Appointments').doc(hospname)
    s1.set({name:hospname});
    var s2 = s1.collection(docreg).doc(useremail)
    s2.set({name:email})
    s2.collection(s.toString()).doc(mission.toString()).set(
      {
        name:name,
        email:email,
        attendees:attendees,
        address:address,
        phone:phone,
        date:date,
        startime:starttime.toString(),
        endtime:endtime.toString(),
        reason:reason,
        id:mission.toString(),
      }
    ).then(()=>console.log('Successfully Added'));
  }
}
