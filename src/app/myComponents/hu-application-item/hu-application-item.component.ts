import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/huservices/application.service';

@Component({
  selector: 'app-hu-application-item',
  templateUrl: './hu-application-item.component.html',
  styleUrls: ['./hu-application-item.component.css']
})
export class HUApplicationItemComponent implements OnInit {

  docreg!:any;
  hospid!:any;
  patientid!:any;
  @Input() item!:any;
  constructor(public route:ActivatedRoute,public service:ApplicationService) { 
    this.docreg = this.route.snapshot.params['docid'];
    this.hospid = this.route.snapshot.params['hospid'];
    this.patientid = this.route.snapshot.params['patientid'];
  }

  ngOnInit(): void {
  }

  accept():void{
    this.service.accept(this.hospid,this.docreg,this.patientid,this.item.id);
  }

  decline():void{
    this.service.decline(this.hospid,this.docreg,this.patientid,this.item.id);
  }

}
