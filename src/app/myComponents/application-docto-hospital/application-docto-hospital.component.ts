import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-docto-hospital',
  templateUrl: './application-docto-hospital.component.html',
  styleUrls: ['./application-docto-hospital.component.css']
})
export class ApplicationDoctoHospitalComponent implements OnInit {

  @Input() docname!:any;
  @Input() docover!:any;
  @Input() docimg!:any;
  @Input() hosname:any;
  @Input() hosphoto:any;
  @Input() hosadd:any;
  constructor() { }

  ngOnInit(): void {
  }

}
