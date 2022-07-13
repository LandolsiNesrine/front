import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { User } from '../models/auth.models';
import { urlJoin } from '../utils/urlJoin';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    constructor(private http: HttpClient) {

    }

    static get base() {
        return urlJoin(environment.server.host);
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        return null;
    }

    /**
     * Performs the auth
     */
    login(username: string, password: string) {
        const url = urlJoin(AuthenticationService.base, "authenticate");
        return this.http.post<any>(url, { username, password });
    }

    whoiam() {
        const url = urlJoin(AuthenticationService.base, "account", "whoiam");
        return this.http.get(url);
    }

    /**
     * Performs the register
     */
    register(username: string, password: string) {
        return null;
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return null;
    }

    /**
     * Logout the user
     */
    logout() {
        sessionStorage.removeItem('token');
    }
}

