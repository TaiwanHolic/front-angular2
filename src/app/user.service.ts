import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UserInfo } from './model/user-info';

@Injectable()
export class UserService {

    private userInfo: UserInfo;

    constructor(
        private http: Http,
        public af: AngularFire
    ) {
    }

    public getUserInfo() {
        if (localStorage.getItem('uid')) {
            if (!this.userInfo) {
                this.userInfo = new UserInfo();
            }
            this.userInfo.uid = localStorage.getItem('uid');
        } else {
            this.userInfo = null;
        }
        return this.userInfo;
    }

    public async login(loginInfo: UserInfo): Promise<any> {
        try {
            return await this.af.auth.login({
                email: loginInfo.email,
                password: loginInfo.password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).then(res=>{
                return res;
            });
        }catch(error){
            return Promise.resolve(error.code);
        }
    }

    public logout(): boolean {
        console.log('get in user service to logout');
        localStorage.removeItem('uid');
        return true;
    }
}