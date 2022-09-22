import { Component, OnInit } from '@angular/core';
import { HuauthService } from 'src/app/services/huservices/huauth.service';

@Component({
  selector: 'app-hu-signin',
  templateUrl: './hu-signin.component.html',
  styleUrls: ['./hu-signin.component.css']
})
export class HuSigninComponent implements OnInit {

  constructor(private service:HuauthService) { }

  ngOnInit(): void {
  }

  signin(name:string,password:string)
  {
    this.service.SignIn(name,password);
  }

}
