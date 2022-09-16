import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';
import { CommonService } from '../_services/common.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-listTrainees',
  templateUrl: './listTrainees.component.html',
  styleUrls: ['./listTrainees.component.css']
})
export class ListTraineesComponent implements OnInit {

  users: User[] = [];
  center_id!: number;
  constructor(private authService: AccountService,
    private route: ActivatedRoute,
    private userService: UserService,
    private alertify: CommonService) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe((next)=>{
      if(next !== null){this.center_id = next.hospital_id}
      })
    this.route.data.subscribe(data => {
      debugger;
      this.users = data['users'];
    });
  }

  

  loadUsers() {
    this.userService.getTrainees(this.center_id)
    .subscribe(
     (next) => {this.users = next});

  }

}
