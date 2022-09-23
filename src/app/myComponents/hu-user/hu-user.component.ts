import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdocService } from 'src/app/services/huservices/getdoc.service';

@Component({
  selector: 'app-hu-user',
  templateUrl: './hu-user.component.html',
  styleUrls: ['./hu-user.component.css']
})
export class HUUserComponent implements OnInit {

  doctorregno:any;
  hospid:any;
  patientid:any;
  temp!:any;
  temp1!:any;
  temp2!:any;
  
  constructor(public ar:ActivatedRoute,public ds:GetdocService) {
    this.doctorregno = ar.snapshot.params['docid'];
    this.hospid = ar.snapshot.params['hospid'];
    this.patientid = ar.snapshot.params['patientid'];
    this.temp = this.ds.getter(this.doctorregno);
    this.temp1 = this.ds.getterhosp(this.hospid);
    this.temp2 = this.ds.getterpatient(this.patientid);
   }

  ngOnInit(): void {
  }

  onActivate(){
    window.scroll(0,0);
  }

}
