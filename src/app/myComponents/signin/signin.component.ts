import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string="";
  password:string = "";

  constructor(public service:AuthService,private route:ActivatedRoute) {}

  ngOnInit(): void {
  }

  login():void
  {
    this.service.SignIn(this.email,this.password);
  }


}
