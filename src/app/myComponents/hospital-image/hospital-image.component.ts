import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-image',
  templateUrl: './hospital-image.component.html',
  styleUrls: ['./hospital-image.component.css']
})
export class HospitalImageComponent implements OnInit {

  @Input() image! : String;

  constructor() { }

  ngOnInit(): void {
  }

}
