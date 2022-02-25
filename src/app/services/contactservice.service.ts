import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  contactitem!:Observable<any>
  constructor(public fs:AngularFirestore) {
    this.contactitem=this.fs.collection('Contactus').doc('contact1').valueChanges()
  }
  readcont()
  {
    return this.contactitem;
  }
}
