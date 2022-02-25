import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from './../../tsdoctorsmodel';

@Component({
  selector: 'app-doctor-details-card',
  templateUrl: './doctor-details-card.component.html',
  styleUrls: ['./doctor-details-card.component.css']
})
export class DoctorDetailsCardComponent implements OnInit {

  @Input() selected!:Doctor
  constructor() { }

  ngOnInit(): void {
  }

}
