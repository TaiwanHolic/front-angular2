import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AppService } from '../../app.service';
import { HttpParams } from '../../model/http-params';
import { Activity } from '../../model/activity';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private arr = Array;
  private activityType: string;
  private activity:Activity;
  private activityId: number;

  constructor(
    private router: Router,
    private appService: AppService
  ) {
    this.activity = new Activity();
  }

  ngOnInit() {
    this.getUrlParams();
    this.getActivity();
  }

  private getUrlParams(): void {
    let url = this.router.url;
    let lastSlashIndex = url.lastIndexOf('/') + 1;
    this.activityId = parseInt(url.substring(lastSlashIndex));
    let secondLastSlashIndex = url.lastIndexOf('/', lastSlashIndex - 2);
    this.activityType = url.substring(secondLastSlashIndex + 1, lastSlashIndex - 1);
  }

  private getActivity(): void {
    let options: HttpParams = {};
    options.id = this.activityId;
    switch (this.activityType) {
      case "food":
        this.appService.getRestaurants(options).subscribe(res => {
          this.activity = res[0];
        });
        break;
      case "fun":
        this.appService.getSpots(options).subscribe(res => this.activity = res[0]);
        break;
      case "stay":
        this.appService.getStays(options).subscribe(res => this.activity = res[0]);
        break;
      case "transport":
        break;
      default:
        break;
    }
  }

}
