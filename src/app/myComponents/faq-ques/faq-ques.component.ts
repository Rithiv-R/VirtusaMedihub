import { Component, OnInit } from '@angular/core';
import {FaqserviceService} from '../../services/faqservice.service'
@Component({
  selector: 'app-faq-ques',
  templateUrl: './faq-ques.component.html',
  styleUrls: ['./faq-ques.component.css']
})
export class FaqQuesComponent implements OnInit {

  myfaqs!: any[];
  constructor(public services : FaqserviceService) { 
  }

  ngOnInit(): void {
    this.services.readfaq().subscribe((val)=>{
      this.myfaqs=val;
    })
  } 

  add()
  {
    this.services.addfaq()
  }
}
