import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlJoin } from 'src/app/core/utils/urlJoin';
import { environment } from "src/environments/environment";
import { CONSTANTE_ACCOUNT_URL } from '../../constant';

@Injectable({ providedIn: 'root' })

export class AccountService {

    constructor(private http: HttpClient) {

    }

    static get base() {
        return urlJoin(environment.server.host);
    }

    public getMenu() {
        const url = urlJoin(AccountService.base, "account", "function");
        return this.http.get<any>(url);
    }

    public whoiam() {
        return this.http.get(`${CONSTANTE_ACCOUNT_URL.WHOIAM}`);
    }

}