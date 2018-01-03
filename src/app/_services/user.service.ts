import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    RequestMethod,
    Response 
} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from '../_interfaces/user';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    private user;
    token;

    constructor(
        private http: Http
    ) { }

    getUser(): Observable<any> {
        // add authorization header with jwt token
        this.token = JSON.parse(localStorage.getItem('currentUser')).token;

        let headers = new Headers({ 'Authorization': this.token });
        let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });

        if(this.token) {
            console.log(headers);
            // get users from api
            return this.http.get(environment.path + 'api/user/user', options)
                .map((response: Response) => {
                    this.user = response.json();

                    return this.user;
                });
        }
    }

    public getU(): void {
        if (this.user && this.user.status) {
            return this.user.data;
        }
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}