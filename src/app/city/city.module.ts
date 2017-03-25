import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CityComponent } from './city.component';
import { AreaComponent } from './area/area.component';
import { ActivityComponent } from './activity/activity.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'city', component: CityComponent },
  { path: 'city/:area', component: AreaComponent },
  { path: 'city/:area/:activity', component: ActivityComponent },
  { path: 'detail/:activity/:id', component: DetailComponent }
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
    CityComponent,
    AreaComponent,
    ActivityComponent,
    DetailComponent
  ]
})
export class CityModule { }
