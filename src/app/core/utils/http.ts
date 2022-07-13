import { HttpClient } from '@angular/common/http';
//import { Response } from '../domain';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: string;
  payload: T;
  message: string;
  total?: any;
}

export function Get<Model>(http: HttpClient, resource: string) {
  return http
    .get<Response<Model>>(resource)
    .pipe(map((response) => response.payload));
}
