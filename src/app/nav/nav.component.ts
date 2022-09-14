import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from '../_models/loginModel';

import { take } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';
import { HospitalService } from '../_services/hospital.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/User';
import { Hospital } from '../_models/Hospital';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { CommonService, toastPayload } from '../_services/common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavMenuComponent implements OnInit {
  model: loginModel = { username: '', password: '' };
  toast!: toastPayload;
  currentRole = '';
  reg = 0;
  currentUserId = 0;
  currentRoles: Array<string> = [];

  constructor(
    public accountService: AccountService,
    private cs: CommonService,
    private router: Router,
    private hospitalService: HospitalService,
    private userService: UserService) { }

  ngOnInit(): void {

    if (this.model.username == '') {
      this.accountService.currentUser$.pipe(take(1)).subscribe((u) => {
        if (u !== null) { this.model.username = u.Username; }
      })
    }
  }

  RegisterNewClient() { this.router.navigate(['/register']); }

  login() {
    this.accountService.login(this.model).subscribe((next) => {

      this.accountService.currentUser$.pipe(take(1)).subscribe((u) => {

        if (u !== null) {
          this.currentUserId = u.UserId;
          this.model.username = u.Username;
          this.currentRoles = u.roles;
         
        }

      })

      // check if the logged in user is a Chef
      if (!this.currentRoles.includes('Chef')) {
        this.model.username = "";
        this.model.password = "";
        this.accountService.logout();
        this.toast = {
          message: "This application is incompatible with your role ...",
          title: "Wrong role",
          type: 'warning',
          ic: {
            timeOut: 2500,
            closeButton: true
          } as IndividualConfig
        };
        this.cs.showToast(this.toast);

       }
      else {

        this.toast = {
          message: "Successfully logged in ",
          title: "Login",
          type: 'success',
          ic: {
            timeOut: 2500,
            closeButton: true
          } as IndividualConfig
        };
        this.cs.showToast(this.toast);

        // push the hospitalname to the behavior subject, if the loggedin person is not admin, want hospital_id of the admin  = 0
        if (!this.currentRoles.includes('Admin')) {
          this.userService.getUser(this.currentUserId).subscribe((next: User) => {
            this.hospitalService.getSpecificHospital(next.hospital_id).subscribe((d: Hospital) => {
              this.accountService.changeCurrentHospital(d.hospitalName); // save the name of this hospital
            });
          })
        }
      }






      console.log(next);
    }, (error) => {
      if (error.status === 401) {
        this.reg = 1;
        this.toast = {
          message: "Not Authorized ... ",
          title: "Failed login",
          type: 'error',
          ic: {
            timeOut: 2500,
            closeButton: true
          } as IndividualConfig
        };
        this.cs.showToast(this.toast);


      }
    })
  }

  logout() {
    this.model.username = "";
    this.model.password = "";
    this.accountService.logout();
    this.toast = {
      message: "Successfully logged out ",
      title: "Logout",
      type: 'success',
      ic: {
        timeOut: 2500,
        closeButton: true
      } as IndividualConfig
    };
    this.cs.showToast(this.toast);
    this.router.navigate(['/'])
  }

}

