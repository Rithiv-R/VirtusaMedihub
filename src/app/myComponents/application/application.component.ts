import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  doctorname:any;
  doctoroverview:any;
  doctorimage:any;
  hospname:any;
  hospphoto:any;
  hospaddress:any;
  constructor(public route:ActivatedRoute) {
    this.doctorname = this.route.snapshot.params['docname'];
    this.doctoroverview  = this.route.snapshot.params['docover']
    this.doctorimage = this.route.snapshot.params['docphoto']
    this.hospname = this.route.snapshot.params['hosname']
    this.hospaddress=this.route.snapshot.params['hosadd']
    this.hospphoto=this.route.snapshot.params['hosphoto']
  }

  ngOnInit(): void {
  }

}
