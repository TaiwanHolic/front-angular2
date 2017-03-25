import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpParams } from './model/http-params';

@Injectable()
export class AppService {
    private host_url = "http://localhost:3000/webapi/";
    private monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    constructor(
        private http: Http
    ) { }

    getData() {
        return this.http.get('https://warm-coast-59773.herokuapp.com/city/northern/food');
    }

    getItineraries(options?: HttpParams) {
        let url = this.host_url + "itinerary";
        let params: URLSearchParams = new URLSearchParams();
        let requestOptions:RequestOptions = new RequestOptions();
        for(let key in options){
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
                return res.json();
            } );
    }

    getComments() {
        let url = this.host_url + "comment";
        return this.http.get(url)
            .map(res => res.json());
    }

    getQuestions(options?: any) {
        let url = this.host_url + "question";
        return this.http.get(url, { search: 'limit=2' })
            .map(function (res) {
                return res.json()
            });
    }

    getRestaurants(options?: HttpParams){
        let url = this.host_url + "restaurant";
        let params: URLSearchParams = new URLSearchParams();
        let requestOptions:RequestOptions = new RequestOptions();
        for(let key in options){
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
                return res.json();
            } );
    }

    getSpots(options?: HttpParams){
        let url = this.host_url + "spot";
        let params: URLSearchParams = new URLSearchParams();
        let requestOptions:RequestOptions = new RequestOptions();
        for(let key in options){
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
                return res.json();
            } );
    }
    
    getStays(options?: HttpParams){
        let url = this.host_url + "stay";
        let params: URLSearchParams = new URLSearchParams();
        let requestOptions:RequestOptions = new RequestOptions();
        for(let key in options){
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
                return res.json();
            } );
    }
}