import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-location',
  templateUrl: './doctor-location.component.html',
  styleUrls: ['./doctor-location.component.css']
})
export class DoctorLocationComponent implements OnInit {

  
  @Input() url!:SafeUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
