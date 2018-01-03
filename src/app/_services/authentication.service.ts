import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Http,
  Headers,
  Response
} from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    checkUser() {
      if (this.token) {
        return true;
      } else {
        return false;
      }
    }

    login(email: string, password: string): Observable<any> {
        // Working with REST API
        return this.http.post(environment.path + 'api/auth/login', JSON.stringify({ email: email, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ token: token }));
                }

                return response.json();
            });
    }

    signup(data: any): Observable<any> {
      return this.http.post(environment.path + 'api/auth/signup', JSON.stringify(data))
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              return response ? response.json() : null;
          });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}