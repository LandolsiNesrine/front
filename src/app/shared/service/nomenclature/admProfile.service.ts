import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_NOMENCLATURE_URL } from '../../constant';

@Injectable({ providedIn: 'root' })
export class AdmProfileService {

    constructor(private http: HttpClient) {
        
    }

    public getListProfile(): Observable<Object> {
        return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ADM_PROFILE}`);
    }

    public getListAdmProfileData(searchObject: Object): Observable<Object> {
        return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.URL_ADM_PROFILE_PAGE}`, searchObject);
    }
}