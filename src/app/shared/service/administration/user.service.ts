import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_ADMINISTRATION_URL } from '../../constant';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {
    }

    public getListUser(searchObject: Object): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.USER}`, searchObject);
    }
}