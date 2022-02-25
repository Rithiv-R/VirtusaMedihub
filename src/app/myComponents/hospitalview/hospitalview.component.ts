import { MaybeForwardRefExpression, SelectorContext } from '@angular/compiler';
import { Component, Input, OnInit ,} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { NavigationExtras, Router, RouterOutlet } from '@angular/router';
import { Hospital } from 'src/app/tsmodel';


@Component({
  selector: 'app-hospitalview',
  templateUrl: './hospitalview.component.html',
  styleUrls: ['./hospitalview.component.css']
})
export class HospitalviewComponent implements OnInit{

  @Input() selector!: Hospital;
  @Input() url!:SafeUrl;
  
  constructor(public router:Router) { 
  }

  ngOnInit(): void {
  }

  myfunc(x:String)
  {
    this.router.navigate(['doctors',x])
  }

}
