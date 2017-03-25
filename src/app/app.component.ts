import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AppService } from './app.service';
import { UserService } from './user.service';
import { UserInfo } from './model/user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private userInfo: UserInfo;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    router.events.subscribe((val: NavigationEnd) => {
      if (!val.urlAfterRedirects) {
        console.log(val);
        this.userInfo = this.userService.getUserInfo();
        console.log(this.userInfo);
      }
    });
  }

  ngOnInit() {
    if(!this.userInfo){
      this.userInfo = this.userService.getUserInfo();
    }
  }
}
