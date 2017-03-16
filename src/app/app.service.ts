import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

    constructor(
        private http: Http
    ) { }

    getData(){
        return this.http.get('https://warm-coast-59773.herokuapp.com/city/northern/food');
    }
}