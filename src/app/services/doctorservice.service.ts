import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(public fs:AngularFirestore) { }

  finddoc(hosp:any)
  {
    var temp: any[] = []
    this.fs.collection("Hospitals").doc(hosp).get().toPromise().then((val)=>{
      var x = val?.get('doctors');
      var hosp_address=val?.get('address');
      var hosp_name=val?.get('name');
      var hosp_location=val?.get('tag');
      var hosp_mail= val?.get('mail'); 
      var hosp_photo=val?.get('photo');
      var hosp_phone=val?.get('phone');
      x.forEach((element: any) => {
        this.fs.collection('Doctors').doc(element).get().toPromise().then((doc)=>{
            var temp2  = {
              doc_regno:doc?.get('regno'),
              doc_name:doc?.get('name'),
              doc_qualification:doc?.get('qualification'),
              doc_experience:doc?.get('experience'),
              doc_photo: doc?.get('photo'),
              doc_overview:doc?.get('overview'),
              hosp_name:hosp_name,
              hosp_address:hosp_address,
              hosp_location:hosp_location,
              hosp_mail:hosp_mail,
              hosp_phone:hosp_phone,
              hosp_photo:hosp_photo,
          };
          temp.push(temp2);
        })
      });
    })
    return temp;
  }

  addhosp()
  {
    var x = [
        {
          doc_regno:"23795",
          doc_name:"Kumudha Manickam",
          doc_qualification:"MBBS; MNAMS; Dortho; DNB; FAO",
          doc_experience:'22 years +',
          doc_photo:'https://cdn.askapollo.com/live/images/doctors/paediatrics-and-neonatology/dr-krishna-priya-paediatrics-and-neonatology-in-chennai.png',
          doc_overview:'Consultant Fellowship Germany, France, USA, Working in Apollo Hospitals since last Assignment',
        },
        {
          doc_regno:"23595",
          doc_name:"Prasand T",
          doc_qualification:"MBBS; MD in Neurology",
          doc_experience:'10 years +',
          doc_photo:'https://cdn.askapollo.com/live/images/doctors/paediatrics-and-neonatology/dr-krishna-priya-paediatrics-and-neonatology-in-chennai.png',
          doc_overview:'Been in service for more than 10 years',
        },
    ];
    x.forEach((val)=>{
      this.fs.collection('Doctors').doc(val.doc_regno).set({
          regno:val.doc_regno,
	        name:val.doc_name,
          qualification:val.doc_qualification,
          experience:val.doc_experience,
          photo:val.doc_photo,
          overview:val.doc_overview,
    }).then((ele)=>console.log('ADDED'))
    })   
  }

}
