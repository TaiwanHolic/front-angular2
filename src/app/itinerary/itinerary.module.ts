import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItineraryComponent } from './itinerary.component';
import { DetailComponent } from './detail/detail.component';
import { SafePipe } from '../pipe/safe-url.pipe';

const routes: Routes = [
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'itinerary/:id', component: DetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ItineraryComponent,
    DetailComponent,
    SafePipe
  ]
})
export class ItineraryModule { }
