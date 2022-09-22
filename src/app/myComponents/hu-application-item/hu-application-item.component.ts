import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hu-application-item',
  templateUrl: './hu-application-item.component.html',
  styleUrls: ['./hu-application-item.component.css']
})
export class HUApplicationItemComponent implements OnInit {

  @Input() item!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
