import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private http: HttpClient) { }

  obtenerDatosJson(url: string): Observable<any> {
    return this.http.get(url);
  }
}
