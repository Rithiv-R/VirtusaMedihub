import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-contact',
  templateUrl: './doctor-contact.component.html',
  styleUrls: ['./doctor-contact.component.css']
})
export class DoctorContactComponent implements OnInit {

  
  @Input() address!:String;
  @Input() email!:String;
  @Input() phone!:String;
  constructor() { }

  ngOnInit(): void {
  }

}
