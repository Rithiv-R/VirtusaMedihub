import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Doctor } from 'src/app/tsdoctorsmodel';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {

  @Input() selector!:Doctor;
  @Input() myurl!:SafeUrl;
  constructor() {
  }

  ngOnInit(): void {
  }

}
