import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-contact',
  templateUrl: './hospital-contact.component.html',
  styleUrls: ['./hospital-contact.component.css']
})
export class HospitalContactComponent implements OnInit {

  @Input() address!:String;
  @Input() email!:String;
  @Input() phone!:String;
  constructor() { }

  ngOnInit(): void {
  }

}
