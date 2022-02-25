import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from './../../tsdoctorsmodel';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  @Input() List_item!: Doctor;
  constructor() { }

  ngOnInit(): void {
  }

}
