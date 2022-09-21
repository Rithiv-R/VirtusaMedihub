import { Component, Input, OnInit } from '@angular/core';
import { AppointmentserviceService } from 'src/app/services/appointmentservice.service'; 
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  name:string = "";
  email:string = "";
  attendees!: Number;
  useremail!:any;
  address:string = "";
  phone!:Number;
  date!:Date;
  starttime!:string;
  endtime:string="";
  reason:string="";
  @Input() docreg!: string;
  @Input() hospname!:string;

  list = [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
  ]

  constructor(private service:AppointmentserviceService, private af:AngularFireAuth) { 
    this.af.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.useremail = userResponse.email;
      }
    })
  }

  ngOnInit(): void {
  }

  submitting(): void
  {
    this.service.addappointment(this.name,this.email,this.attendees,this.address,this.phone,this.date,this.starttime,this.endtime,this.reason,this.docreg,this.hospname,this.useremail);
  }

  changedstart(start:string):void
  {
    this.starttime = start;
  }

  changedend(end:string):void
  {
    this.endtime = end;
  }
  
}
