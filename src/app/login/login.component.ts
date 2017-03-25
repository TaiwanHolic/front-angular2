import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../model/user-info';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private inputUsername: string;
  private inputPassword: string;
  private loginInfo: UserInfo;
  private isValid: boolean;
  private hint: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.loginInfo = new UserInfo();
    this.isValid = false;
    this.hint = '';
  }

  ngOnInit() {
  }

  private verifyForm(){
    if(!this.loginInfo.email){
      this.isValid = false;
      this.hint = 'Please type your email and password';
      return;
    }
    if(!this.loginInfo.password){
      this.isValid = false;
      this.hint = 'Please type your email and password';
      return;
    }
    this.isValid = true;
  }

  private loginLocal(form) {
    this.userService.login(this.loginInfo)
      .then(res=>{
        if(res.uid){
          localStorage.setItem('uid', res.uid);
          this.router.navigate(['index']);
        }else{
          console.log(res);
        }
      });
  }

  private loginFacebook() {
    console.log("login facebook");
  }

}
