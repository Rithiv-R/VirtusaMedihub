import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hu-user',
  templateUrl: './hu-user.component.html',
  styleUrls: ['./hu-user.component.css']
})
export class HUUserComponent implements OnInit {

  doctorregno:any;
  hospid:any;
  patientid:any;
  
  constructor(public ar:ActivatedRoute) {
    this.doctorregno = ar.snapshot.params['docid'];
    this.hospid = ar.snapshot.params['hospid'];
    this.patientid = ar.snapshot.params['patientid'];
   }

  ngOnInit(): void {
  }

  onActivate(){
    window.scroll(0,0);
  }

}
