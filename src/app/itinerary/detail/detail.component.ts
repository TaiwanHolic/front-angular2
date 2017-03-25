import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

import { AppService } from '../../app.service';
import { HttpParams } from '../../model/http-params';
import { SafePipe } from '../../pipe/safe-url.pipe';
import { Itinerary} from '../../model/itinerary';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private arr = Array;
  private itineraryId: number;
  private itinerary:Itinerary;
  private itineraryFile: SafeResourceUrl;

  constructor(
    private router: Router,
    private appService: AppService,
    private domSanitizer: DomSanitizer
  ) {
    this.itinerary = new Itinerary();
    // this.itinerary = {
    //   banner_url : "",
    //   file: ""
    // }
  }

  ngOnInit() {
    this.getUrlParams();
    this.getItinerary();
  }

  private getUrlParams(): void {
    let url = this.router.url;
    let lastSlashIndex = url.lastIndexOf('/') + 1;
    this.itineraryId = parseInt(url.substring(lastSlashIndex));
  }

  private getItinerary(): void {
    let options: HttpParams = {};
    options.id = this.itineraryId;
    this.appService.getItineraries(options).subscribe(res => {
      this.itinerary = res[0];
    });
  }

  // private safeUrl(): void {
  //   this.itineraryFile = this.domSanitizer.bypassSecurityTrustResourceUrl(this.itinerary.file);
  // }
}
