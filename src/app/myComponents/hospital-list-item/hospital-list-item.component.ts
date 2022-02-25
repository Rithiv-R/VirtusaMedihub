import { Component, Input, OnInit } from '@angular/core';
import { Hospital } from 'src/app/tsmodel';

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.css']
})
export class HospitalListItemComponent implements OnInit {

  @Input() List_item!: Hospital;
  constructor() { }

  ngOnInit(): void {
  }

}
