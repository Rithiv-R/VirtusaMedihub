import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from 'src/app/services/contactservice.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-contactus-home',
  templateUrl: './contactus-home.component.html',
  styleUrls: ['./contactus-home.component.css']
})
export class ContactusHomeComponent implements OnInit {

  contactitem!:any
  urlSafe!: SafeResourceUrl;
  constructor(private _sanitizer :DomSanitizer,public services:ContactserviceService) { }

  ngOnInit(): void {
    this.services.readcont().subscribe((val)=>{
      this.contactitem=val;
      this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl(this.contactitem.tag)
      }
    )
  }
}
