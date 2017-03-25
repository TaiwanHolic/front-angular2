import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

import { AppService } from '../../app.service';
import { HttpParams } from '../../model/http-params';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  private arr = Array;
  private area: string;
  private activity: string;
  private itemList: Array<any>;

  constructor(
    private router: Router,
    private appService: AppService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getUrlParams();
        this.getActivities();
      }
    });
  }

  ngOnInit() {
    this.getUrlParams();
    this.getActivities();
  }

  private getUrlParams(): void {
    let url = this.router.url;
    let lastSlashIndex = url.lastIndexOf('/') + 1;
    this.activity = url.substring(lastSlashIndex) || 'food';
    let secondLastSlashIndex = url.lastIndexOf('/', lastSlashIndex - 2);
    this.area = url.substring(secondLastSlashIndex + 1, lastSlashIndex - 1);
  }

  private getActivities(): void {
    let options: HttpParams = {};
    options.area = this.area;
    switch (this.activity) {
      case "food":
        this.appService.getRestaurants(options).subscribe(res => this.itemList = res);
        break;
      case "fun":
        console.log('fun');
        this.appService.getSpots(options).subscribe(res => this.itemList = res);
        break;
      case "stay":
        console.log('stay');
        this.appService.getStays(options).subscribe(res => this.itemList = res);
        break;
      case "transport":
        break;
      default:
        break;
    }
  }

}
