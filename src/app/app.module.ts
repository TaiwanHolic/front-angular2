import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { CityModule } from './city/city.module';
import { ItineraryModule } from './itinerary/itinerary.module';
import { LoginModule } from './login/login.module';
import { LogoutComponent } from './logout/logout.component';

const myFirebaseConfig = {
  apiKey: 'AIzaSyC8wDUxTI7ufGGE9dvuB0IWIOIQn0rEer8',
  authDomain: 'taiwanholic-ff917.firebaseapp.com',
  databaseURL: 'https://taiwanholic-ff917.firebaseio.com',
  storageBucket: 'taiwanholic-ff917.appspot.com',
  messagingSenderId: '1063761420061'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    CityModule,
    ItineraryModule,
    LoginModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    AppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
