import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { AppService } from '../app.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private itineraries = [];
  private comments = [];
  private questions = [];
  private arr = Array;
  
  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
    this.getItinerary();
    this.getComments();
    this.getQuestions();
  }

  private getItinerary():void{
    this.appService.getItineraries()
      .subscribe(res => this.itineraries = res);
  }

  private getComments():void{
    this.appService.getComments()
      .subscribe(res=>this.comments = res);
  }

  private getQuestions():void{
    let options = {
      limit: 2
    }
    this.appService.getQuestions(options)
      .subscribe(res => this.questions = res);
  }

}
