import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.css']
})
export class ServicecardComponent implements OnInit {

  @Input() title:any;
  @Input() desc:any;
  @Input() img:any;
  constructor() { }

  ngOnInit(): void {
  }

}
