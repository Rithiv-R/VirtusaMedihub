import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientselectService } from 'src/app/services/huservices/patientselect.service';

@Component({
  selector: 'app-hu-patient-list',
  templateUrl: './hu-patient-list.component.html',
  styleUrls: ['./hu-patient-list.component.css']
})
export class HuPatientListComponent implements OnInit {

  docid:any;
  hospid:any;
  patientlist!:any[];
  constructor(public service:PatientselectService,public route:ActivatedRoute) { 
    this.hospid = this.route.snapshot.params['hospname'];
    this.docid = this.route.snapshot.params['docid'];
    this.patientlist = this.service.findpatient(this.hospid,this.docid);
  }

  ngOnInit(): void {
  }

}
