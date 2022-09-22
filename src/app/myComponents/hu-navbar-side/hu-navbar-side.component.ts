import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hu-navbar-side',
  templateUrl: './hu-navbar-side.component.html',
  styleUrls: ['./hu-navbar-side.component.css']
})
export class HUNavbarSideComponent implements OnInit {
  @Input() docreg: any;
  @Input() hospname:any;
  constructor() { }

  ngOnInit(): void {
  }

}
