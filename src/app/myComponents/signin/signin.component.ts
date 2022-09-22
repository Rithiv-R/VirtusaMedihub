import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(public service:AuthService,private route:ActivatedRoute) {}

  ngOnInit(): void {
  }

  login(email:string,password:string):void
  {
    this.service.SignIn(email,password);
  }

  forgetpass(email:string):void{
    this.service.ForgetPass(email);
  }

}
