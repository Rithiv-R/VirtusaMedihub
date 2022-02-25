import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-overview',
  templateUrl: './hospital-overview.component.html',
  styleUrls: ['./hospital-overview.component.css']
})
export class HospitalOverviewComponent implements OnInit {

  @Input() details!:String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
