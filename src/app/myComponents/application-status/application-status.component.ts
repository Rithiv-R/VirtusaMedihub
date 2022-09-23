import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StatusService } from 'src/app/services/huservices/status.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  email!:any;
  status!:any;
  constructor(private fs:AngularFirestore,private sts:StatusService,private af:AngularFireAuth) { 
    this.af.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email;
        console.log(this.email);
        this.status = this.sts.getstatus(this.email);
      }
    })
  }

  ngOnInit(): void {
  }



}
