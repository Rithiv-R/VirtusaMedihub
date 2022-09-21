import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userCustomerId:any;
  islogged = false;
  constructor(private af:AngularFireAuth,private service:AuthService) {
  }

  ngOnInit(): void {
    this.isauth();
  }


  isauth() : void
  {
    this.af.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.userCustomerId = userResponse.email;
        this.islogged = true;
      }
    })
  }


  signout():void
  {
    this.service.SignOut();
    this.islogged = false;
  }


}
