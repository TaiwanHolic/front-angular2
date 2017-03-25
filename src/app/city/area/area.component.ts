import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AppService } from '../../app.service';
import { HttpParams } from '../../model/http-params';

@Component({
  selector: 'app-city-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  private area: string;
  private restaurants: Array<any>;
  private spots: Array<any>;
  private stays: Array<any>;
  private arr = Array;

  constructor(
    private router: Router,
    private appService: AppService
  ) {
    this.restaurants = [];
    this.spots = [];
    this.stays = [];
    router.events.subscribe((val: NavigationEnd) => {
      if (!val.urlAfterRedirects) {
        this.area = this.getArea(val.url);
        this.initData();
      }
    });
  }

  ngOnInit() {
    this.area = this.getArea();
    this.initData();
  }

  private initData() {
    this.getRestaurants();
    this.getSpots();
    this.getStays();
  }

  private getArea(url_string?:string): string {
    let url = url_string || this.router.url;
    let areaParam = url.substring(url.lastIndexOf('/') + 1) || 'northern';
    return areaParam;
  }

  private getRestaurants(): void {
    let options: HttpParams = {};
    options.area = this.area;
    this.appService.getRestaurants(options).subscribe(res => this.restaurants = res);
  }

  private getSpots(): void {
    let options: HttpParams = {};
    options.area = this.area;
    this.appService.getSpots(options).subscribe(res => this.spots = res);
  }

  private getStays(): void {
    let options: HttpParams = {};
    options.area = this.area;
    this.appService.getStays(options).subscribe(res => this.stays = res);
  }

}
