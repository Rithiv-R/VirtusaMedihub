import { Component, OnInit } from '@angular/core';
import { DoctorselectService } from 'src/app/services/huservices/doctorselect.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hu-select',
  templateUrl: './hu-select.component.html',
  styleUrls: ['./hu-select.component.css']
})
export class HuSelectComponent implements OnInit {

  doctolist!:any;
  hospid!:any;
  constructor(public service:DoctorselectService,public route:ActivatedRoute) {
    this.hospid = this.route.snapshot.params['hospname'];
  }

  ngOnInit(): void {
    this.doctorlistfetch()
  }

  doctorlistfetch(){
    this.doctolist = this.service.fetchdoctor(this.hospid);
  }
  

}
