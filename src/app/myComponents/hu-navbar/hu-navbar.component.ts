import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hu-navbar',
  templateUrl: './hu-navbar.component.html',
  styleUrls: ['./hu-navbar.component.css']
})
export class HUNavbarComponent implements OnInit {

  @Input() patientid:any;
  @Input() docreg: any;
  @Input() hospname:any;
  constructor() { }

  ngOnInit(): void {
  }

}
