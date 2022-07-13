import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CONSTANTE_NOMENCLATURE_URL } from '../../constant';

@Injectable({ providedIn: 'root' })
export class SexeService {

    constructor(private http: HttpClient) {
    }

    public getListSexe(): Observable<Object> {
        return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_SEXE}`);
    }
}