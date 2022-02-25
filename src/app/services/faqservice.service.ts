import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqserviceService {

  faqlists!:Observable<any[]>
  constructor(public fs : AngularFirestore) { 
    this.faqlists=this.fs.collection('Faq').valueChanges()
  }

  readfaq()
  {
    return this.faqlists;
  }

  addfaq()
  {
    var faq = [
      {
        question:'Are all the Doctors available round-the-clock?',
        answer:'No, the doctors are available as per pre-determined consultation hours. The relevant information can be checked from askmedhub.com or our Call Centre 1860 500 7788.',
      },
      {
        question:'What are the services available in Medhub certified hospitals?',
        answer:'Every hospital offer Consultations for infants, children, adolescents, women, men and senior citizens. We also offer Lab Tests, Health Checks, Vaccinations, Dental services and Diabetes care. There is an  Family Doctor at every centre and a treatment room that caters to medical requirements which includes minor procedures.',
      },
      {
        question:'Do you have the facility of sample pickup for diagnostics?',
        answer:'Yes. When you book our  service, a trained phlebotomist visits your home or workplace, as per your choice and collects samples. You can download your reports from our website or the PHR (Patient Health Records) section at https://phr.medhyb.com',
      },
      {
        question:'Is fasting required for my test??',
        answer:'Fasting for a test requires you to have no food or drink, except water, for 12 hours prior to sample collection. However not all tests require fasting. Please call us on 1860 500 7788 for queries.',
      },
      {
        question:'Will I get a certificate for my vaccine shot?',
        answer:'Yes we provide you with certificates issued by the government.',
      },
      {
        question:'What are the working hours? Are you open on Sundays?',
        answer:'To make it convenient for you, your neighbourhood hospitals are open from 8 AM to 8 PM. We work on Sundays also, for more detail please call 1860 500 7788',
      },
      {
        question:'Can emergencies be treated at any hospital?',
        answer:'The hospital we certify are a primary health care providers and caters to everyday healthcare / medical issues. We have a treatment room where we attend to minor cuts, bruises, sores etc. Our experienced doctors can also stabilise a patient before referring him / her to the nearest  hospital.',
      },
      {
        question:'Do you organise camps?',
        answer:'Yes, we do organise camps that focus on a single health issue. These camps are held both small areas and at large apartment complexes to make it easy for people from the neighbourhood to attend.',
      },
      {
        question:'Can I get my child over for immunisation?',
        answer:'Yes, you can visit us for infant and child vaccinations. We also have adult vaccines that safeguard men and women from seasonal diseases such as Flu and other more serious illnesses including cervical cancer. Our vaccines are sourced from the best of brands and are very safe.',
      },
    ]
  faq.forEach((element)=>{
    this.fs.collection('Faq').add({
      question:element.question,
      answer:element.answer,
    })
  })
  }
}
