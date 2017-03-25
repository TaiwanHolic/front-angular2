import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full'}
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        IndexComponent
    ],
    providers: [],
})

export class AppRoutingModule { }
