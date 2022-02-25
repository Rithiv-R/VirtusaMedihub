import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../../services/contactservice.service';

@Component({
  selector: 'app-contactcard2',
  templateUrl: './contactcard2.component.html',
  styleUrls: ['./contactcard2.component.css']
})
export class Contactcard2Component implements OnInit {

  contactitem!:any
  constructor(public services:ContactserviceService) { }

  ngOnInit(): void {
    this.services.readcont().subscribe((val)=>{
      this.contactitem=val;
      }
    )
  }
}
