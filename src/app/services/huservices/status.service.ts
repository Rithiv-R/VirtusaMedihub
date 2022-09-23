import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(
    private fs:AngularFirestore
  ) { }

  getstatus(pid:string)
  { 
    var temp1:any[]=[];
    this.fs.collection('Requests').doc(pid).get().toPromise().then(x=>console.log(x?.get('useremail')))
    this.fs.collection('Requests').doc(pid).collection('sent').get().toPromise().then(x=>{console.log(x?.size),x?.forEach(data=>{
        var collectionid= data.get('collectionid');
        var docid= data.get('docid');
        var documentid=data.get('documentid');
        var hospid=data.get('hospid');
        var patientid=data.get('patientid');
        this.fs.collection('Appointments').doc(hospid).collection(docid).doc(patientid).collection(collectionid).doc(documentid).get().toPromise().then(val=>{
          var temp = {
            address : val?.get('address'),
            attendees: val?.get('attendees'),
            date : val?.get('date'),
            email:val?.get('email'),
            endtime: val?.get('endtime'),
            id:val?.get('id'),
            status:val?.get('status'),
            name:val?.get('name'),
            phone:val?.get('phone'),
            reason:val?.get('reason'),
            startime: val?.get('startime'),
            collectionid:val?.get('collectionid'),
            hospid:hospid,
            patientid:patientid,
            docid:docid,
          }
          temp1.push(temp);
        });
    })});
    return temp1;
  }
}
