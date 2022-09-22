import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hu-welcome',
  templateUrl: './hu-welcome.component.html',
  styleUrls: ['./hu-welcome.component.css']
})
export class HuWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(){
    window.scroll(0,0);
  }

}
