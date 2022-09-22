import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyTxtRecord } from 'dns';
import { ApplicationService } from 'src/app/services/huservices/application.service';

@Component({
  selector: 'app-hu-application-list',
  templateUrl: './hu-application-list.component.html',
  styleUrls: ['./hu-application-list.component.css']
})
export class HUApplicationListComponent implements OnInit {

  docreg!:any;
  hospid!:any;
  patientid!:any;
  accepted!:any;
  denied!:any;
  pending!:any;
  constructor(public route:ActivatedRoute,private service:ApplicationService) {
    this.docreg = this.route.snapshot.params['docid'];
    this.hospid = this.route.snapshot.params['hospid'];
    this.patientid = this.route.snapshot.params['patientid'];
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch():void{
   var x=this.service.sort(this.hospid,this.docreg,this.patientid);
   this.accepted = x[0]
   this.denied = x[1]
   this.pending = x[2]
  }



}
