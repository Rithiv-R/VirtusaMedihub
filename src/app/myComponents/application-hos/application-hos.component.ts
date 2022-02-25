import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-hos',
  templateUrl: './application-hos.component.html',
  styleUrls: ['./application-hos.component.css']
})
export class ApplicationHosComponent implements OnInit {

  @Input() hosname!:any;
  @Input() hosphoto!:any;
  @Input() hosadd!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
