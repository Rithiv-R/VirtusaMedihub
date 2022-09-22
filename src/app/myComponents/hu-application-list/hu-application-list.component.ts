import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/huservices/application.service';

@Component({
  selector: 'app-hu-application-list',
  templateUrl: './hu-application-list.component.html',
  styleUrls: ['./hu-application-list.component.css']
})
export class HUApplicationListComponent implements OnInit {

  docreg!:any;
  hospid!:any;
  constructor(public route:ActivatedRoute,private service:ApplicationService) {
    this.docreg = this.route.snapshot.params['docid'];
    this.hospid = this.route.snapshot.params['hospid'];
  }

  ngOnInit(): void {
    this.service.sortaccepted(this.hospid,this.docreg);
  }

  

}
