import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.css']
})
export class CommentcardComponent implements OnInit {

  @Input() name:any;
  @Input() comment:any;

  constructor() { }

  ngOnInit(): void {
  }

}
