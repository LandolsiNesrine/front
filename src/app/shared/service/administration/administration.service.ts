import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_ADMINISTRATION_URL } from '../../constant';

@Injectable({ providedIn: 'root' })
export class AdministrationService {

    constructor(
        private http: HttpClient
    ) { }

    public getListLogData(searchObject: Object): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.LOG_DATA}`, searchObject);
    }

    public getListAccessData(searchObject: Object): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.ACCESS_DATA}`, searchObject);
    }

    public getListUsesr(searchObject: Object): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.USERS}`, searchObject);
    }

    public pushUser(formUser: any): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.USER}`, formUser);
    }

    public putUser(formUser: any, idAdmUser: String): Observable<Object> {
        return this.http.put(`${CONSTANTE_ADMINISTRATION_URL.USER}` + '/' + idAdmUser + '', formUser);
    }

    public getAdmUser(idAdmUser: String) {
        return this.http.get(`${CONSTANTE_ADMINISTRATION_URL.USER}` + '/' + idAdmUser + '');
    }

    public deleteAdmUser(idAdmUser: String) {
        return this.http.delete(`${CONSTANTE_ADMINISTRATION_URL.USER}` + '/' + idAdmUser + '');
    }

    public getListLogDataByIdAdmUser(searchObject: Object, idAdmUser): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.LOG_DATA_USER}` + '/' + idAdmUser + '', searchObject);
    }

    public getListAccessDataByIdAdmUser(searchObject: Object, idAdmUser): Observable<Object> {
        return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.ACCESS_DATA_USER}` + '/' + idAdmUser + '', searchObject);
    }
}