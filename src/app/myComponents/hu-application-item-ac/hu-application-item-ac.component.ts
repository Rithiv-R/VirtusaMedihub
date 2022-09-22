import { Component, OnInit } from '@angular/core';
import { UserhospService } from 'src/app/services/userhosp.service';

@Component({
  selector: 'app-hu-application-item-ac',
  templateUrl: './hu-application-item-ac.component.html',
  styleUrls: ['./hu-application-item-ac.component.css']
})
export class HuApplicationItemAcComponent implements OnInit {

  constructor(public service:UserhospService) { }

  ngOnInit(): void {
  }

  add()
  {
    this.service.addhosp();
  }

}
