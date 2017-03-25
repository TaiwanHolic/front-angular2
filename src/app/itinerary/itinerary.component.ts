import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { HttpParams } from '../model/http-params';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  private arr = Array;
  private itineraryList: Array<any>;

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit() {
    this.getItineraryList();
  }

  private getItineraryList(): void {
    this.appService.getItineraries()
      .subscribe(res=>{
        this.itineraryList = res;
      });
  }

}
