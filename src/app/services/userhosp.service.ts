import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import {distanceBetween, geohashForLocation, geohashQueryBounds} from 'geofire-common' 
@Injectable({
  providedIn: 'root'
})

export class UserhospService {
  items ! :Observable<any[]> 
  x!:any;
  y!:any;
  constructor(public fs:AngularFirestore) {
    this.items = fs.collection('Hospitals').valueChanges()
  }

  readhospitals() : Observable<any[]>
  {
    return this.items
  }

  addhosp()
  {
    var x = [
      {
        hosp_address:"KS Hospital,CK Srinivasa Rao St, near Bus Stand, Dharmapuri, Tamil Nadu 636701",
        hosp_name:"KS Hospital,Dharmapuri",
        hosp_photo:"https://content3.jdmagicbox.com/comp/dharmapuri/s6/9999p4342.4342.091031014322.x6s6/catalogue/k-s-hospital-dharmapuri-fort-dharmapuri-hospitals-klmdds2rmd.jpg",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7251546445746!2d78.16136462356314!3d12.130948217722343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac1702e8d772c9%3A0xa357677e405865b9!2sKS%20Hospital!5e0!3m2!1sen!2sin!4v1642274511798!5m2!1sen!2sin",
        hosp_details:'Apollo Hospitals, Greams Road Chennai, the flagship hospital of the Apollo Group was established in 1983. Revolutionizing the healthcare sector, the hospital has over 60 departments spearheaded by internationally trained doctors, state-of-the-art facilities for various health disorders and cutting-edge medical procedures, that makes it the most preferred destinations for patients from across India and around the globe.',
        hosp_mail: 'kshospitaldpi@gmail.com',
	      latitude : 12.132794321008475,
	      longitude : 78.16209418440349,
        hosp_phone:'+919361047198',
      },
    ];
    x.forEach((val)=>{
      const hash = geohashForLocation([val.latitude, val.longitude]);
      this.fs.collection('Hospitals').doc(val.hosp_name).set({
        address:val.hosp_address,
        name:val.hosp_name,
        photo:val.hosp_photo,
        tag:val.tag,
        detail:val.hosp_details,
        mail: val.hosp_mail,
	      latitude : 12.132794321008475,
	      longitude : 78.16209418440349,
        hosp_phone:'+919361047198',
        geohash: hash,
        lat: val.latitude,
        lng: val.longitude,
    })
    })   
  }

}
