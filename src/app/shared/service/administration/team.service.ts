/*import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_ADMINISTRATION_URL } from '../../constant';
import { CriteriaSearch } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
) { }

public getListTeam(searchObject: Object): Observable<Object> {
  return this.http.get(`${CONSTANTE_ADMINISTRATION_URL.TEAM}`, searchObject);
}


public getListTeams(): Observable<Object> {
  return this.http.get(`${CONSTANTE_ADMINISTRATION_URL.TEAM}`);
}

public getListUTeams(): Observable<Object> {
  return this.http.get(`${CONSTANTE_ADMINISTRATION_URL.VTEAM}`);
}

public getListTeamByIdAdmTeam(idAdmTeam:String ): Observable<Object> {
  return this.http.get(`${CONSTANTE_ADMINISTRATION_URL.TEAM}` + '/' + idAdmTeam);
}

public deleteAdmTeam(idAdmTeam: String) {
  return this.http.delete(`${CONSTANTE_ADMINISTRATION_URL.TEAM}` + '/' + idAdmTeam + '');
}


public pushTeam(teamForm: Object): Observable<Object> {
  return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.TEAM}`, teamForm);}


public putTeam(teamForm: any, idAdmTeam: String): Observable<Object> {
    return this.http.put(`${CONSTANTE_ADMINISTRATION_URL.TEAM}` + '/' + idAdmTeam + '', teamForm);
}  

public putTeams(teamForm: any): Observable<Object> {
  return this.http.put(`${CONSTANTE_ADMINISTRATION_URL.TEAM}` , teamForm);
} 

public postTeam(teamForm: Object): Observable<Object> {
  return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.TEAM}`, teamForm);}


  public searchTeam(formsearch :CriteriaSearch):Observable<Object> {
    return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.TEAM}`+'/data/',{formsearch});
  }


  public postUTeam(uteamForm: Object): Observable<Object> {
    return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.USERTEAM}`, uteamForm);}

    public postBTeam(teamForm: Object): Observable<Object> {
      return this.http.post(`${CONSTANTE_ADMINISTRATION_URL.TEAM}`+'/B/', teamForm);}

}*/