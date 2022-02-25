import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-overview',
  templateUrl: './doctor-overview.component.html',
  styleUrls: ['./doctor-overview.component.css']
})
export class DoctorOverviewComponent implements OnInit {

  @Input() details!:String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
