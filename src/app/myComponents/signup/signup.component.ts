import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  signup(username:string,email:string,password:string,repassword:string):void{
    if(password==repassword)
    {
      this.service.SignUp(email,password,username);
    }
    else
    {
      window.alert("Password And RePassword are not Same!!");
    }
    
  }

}
