import { Component, Input, OnInit } from '@angular/core';
import { User } from '../_models/User';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  @Input() user!: User;

  constructor() { }

  ngOnInit() {

  }

  sendEmail() {

  }

}
