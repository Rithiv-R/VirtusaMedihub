import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HuauthService } from 'src/app/services/huservices/huauth.service';

@Component({
  selector: 'app-hu-navbar',
  templateUrl: './hu-navbar.component.html',
  styleUrls: ['./hu-navbar.component.css']
})
export class HUNavbarComponent implements OnInit {

  @Input() patientid:any;
  @Input() docreg: any;
  @Input() hospname:any;
  islogged!:any;
  hospuseremail!:any;
  constructor(private af:AngularFireAuth,private afs:AngularFirestore,private service:HuauthService) { }

  ngOnInit(): void {
    this.af.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.afs.collection("husers").get().toPromise().then(data=>data?.forEach(x=>{
          if(userResponse.email==x.id)
          {
            this.hospuseremail = userResponse.email;
             this.islogged = true;
          }
        })); 
      }
    })
  }


  signout()
  {
    this.islogged = false;
    this.service.Signout();
  }


}
