import { Component, OnInit } from '@angular/core';
import {ContactserviceService} from '../../services/contactservice.service'

@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.css']
})
export class ContactcardComponent implements OnInit {

  
  contactitem!:any
  constructor(public services:ContactserviceService) { }

  ngOnInit(): void {
    this.services.readcont().subscribe((val)=>{
      this.contactitem=val;
      }
    )
  }

}
