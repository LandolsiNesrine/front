import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriteriaSearch } from '../../models';
import { AgendaData } from '../../models/agenda/agenda';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_AGENDA_URL } from '../../constant/url/constant.agenda';
@Injectable({
  providedIn: 'root'
})
export class AgednaService{
  constructor(
    private http: HttpClient
) { }


public postagenda(formAgenda:AgendaData):Observable<Object> {
  return this.http.post(`${CONSTANTE_AGENDA_URL.AGENDA}` + '/',formAgenda);
}
public getagendaByUsername(userName :String):Observable<Object> {
  return this.http.get(`${CONSTANTE_AGENDA_URL.AGENDA}` + '/'+userName);
}
public searchData(dataSearch: CriteriaSearch):Observable<Object> {
  return this.http.post(`${CONSTANTE_AGENDA_URL.AGENDA}` + '/data',{dataSearch});
}
public getagenda():Observable<Object> {
  return this.http.get(`${CONSTANTE_AGENDA_URL.AGENDA}`+ '/');
}
public deleteAgenda(code : String) :Observable<Object> {
  return this.http.delete(`${CONSTANTE_AGENDA_URL.AGENDA}`+ '/'+code +'');
}
}