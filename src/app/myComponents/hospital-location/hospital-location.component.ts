import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hospital-location',
  templateUrl: './hospital-location.component.html',
  styleUrls: ['./hospital-location.component.css']
})
export class HospitalLocationComponent implements OnInit {

  @Input() url!:SafeUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
