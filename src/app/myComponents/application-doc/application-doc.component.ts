import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-doc',
  templateUrl: './application-doc.component.html',
  styleUrls: ['./application-doc.component.css']
})
export class ApplicationDocComponent implements OnInit {

  @Input() docname!:any;
  @Input() docover!:any;
  @Input() docimg!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
