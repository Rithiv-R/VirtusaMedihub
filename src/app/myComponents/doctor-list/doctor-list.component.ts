import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/tsdoctorsmodel';
import {DoctorserviceService} from '../../services/doctorservice.service'

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  selected!:Doctor;
  value!:Boolean;
  formholder!:String;
  formmessage!:String;
  formemail!:String;
  selectedind!:number;
  doctorList! : any;
  urlSafe!: SafeResourceUrl;
  val!:String;
  key!:String;

  constructor(private _sanitizer :DomSanitizer,public service:DoctorserviceService, private route:ActivatedRoute) { 
    this.key = this.route.snapshot.params['name'];
    this.doctorList = this.service.finddoc(this.key);
    console.log(this.doctorList);
  }

  ngOnInit(): void {
  }
  

  onclick(val:Doctor,ind:number)
  {
    this.value = true;
    this.selected=val;
    this.selectedind = ind;
    this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl(val.hosp_location);
  }
  
  onsubmit()
  {
    alert('YOUR SUGGESTION HAS BEEN RECODED '+this.formholder);
  }


  GetData()
  {  
    alert('REQUEST SENT SUCCESSFULLY');
  }  


}
