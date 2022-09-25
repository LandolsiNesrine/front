import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CONSTANTE_PROJECT_URL} from '../../constant/url/constant.project'
import { CriteriaSearch } from '../../models';
import { UpdateObj } from '../../models/agenda/updateObj';




@Injectable({ providedIn: 'root' })
export class ProjectService{
  constructor(
    private http: HttpClient
) { }

public getListProject(): Observable<Object> {
  return this.http.get(`${CONSTANTE_PROJECT_URL.PROJECT}`);

}
public putProject(formProject: any ): Observable<Object> {
  return this.http.put(`${CONSTANTE_PROJECT_URL.PROJECT}`  + '/', formProject);
}
public deleteProject(codeProject : String) :Observable<Object> {
  return this.http.delete(`${CONSTANTE_PROJECT_URL.PROJECT}` + '/'+codeProject +'');
}
public postProject(formProject : any):Observable<Object> {
  return this.http.post(`${CONSTANTE_PROJECT_URL.PROJECT}` + '/',formProject);
}
public searchData(dataSearch: CriteriaSearch):Observable<Object> {
  return this.http.post(`${CONSTANTE_PROJECT_URL.PROJECT}`+'/data/',{dataSearch});
}
public putProjectByRef(updateObj :UpdateObj): Observable<Object> {
  return this.http.put(`${CONSTANTE_PROJECT_URL.PROJECT}`  + '/ref/', updateObj);
}

}