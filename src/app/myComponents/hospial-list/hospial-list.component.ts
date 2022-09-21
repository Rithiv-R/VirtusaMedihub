import { Component, NgModule, OnInit ,Input} from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Hospital } from 'src/app/tsmodel';
import {UserhospService} from '../../services/userhosp.service'
import {AppComponent} from '../../app.component'
import { distanceBetween } from 'geofire-common';

@Component({
  selector: 'app-hospial-list',
  templateUrl: './hospial-list.component.html',
  styleUrls: ['./hospial-list.component.css']
})

export class HospialListComponent implements OnInit {
  selected!:Hospital;
  value!:Boolean;
  formholder!:String;
  formmessage!:String;
  formemail!:String;
  selectedind!:number;
  listHospital! : Hospital[]
  urlSafe!: SafeResourceUrl;
  val!:String;
  x!:any;
  y!:any;
  len !:any;
  page=1;
  constructor(private _sanitizer :DomSanitizer,public services: UserhospService) { 
  }
  
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.x = position.coords.latitude;
      this.y = position.coords.longitude;
    })
    this.services.readhospitals().subscribe((val)=>{
     var x1: Hospital[] = []
     val.forEach((element)=>{
       x1.push({
        hosp_address:element.address,
        hosp_name:element.name,
        hosp_photo:element.photo,
        tag:element.tag,
        hosp_details:element.detail,
        hosp_mail: element.mail,
        hosp_phone:element.phone,
        hosp_latitude:element.lat,
        hosp_longitude:element.lng,
        doctors:element.doctors,
       })
     })
    var y1: Hospital[] = []
    var radius = 500*1000;
    x1.forEach((element)=>{
     const distanceInKm = distanceBetween([element.hosp_latitude, element.hosp_longitude], [this.x,this.y]);
      const distanceInM = distanceInKm * 1000;
      if (distanceInM <= radius) {
        y1.push(element)
      }
    })
    this.listHospital=y1
    })
    this.services.readhospitals().subscribe((val)=>{this.len=val.length});  
  }

  onclick(val:Hospital,ind:number)
  {
    this.value = true;
    this.selected=val;
    this.selectedind = ind;
    this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl(this.selected.tag)
  }
  
  onadd()
  {
    this.services.addhosp();
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
