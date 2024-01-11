import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Tutorial } from './models/tutorial';
@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  private datosTransferidos = new Subject<Tutorial | null>();

  constructor(private http: HttpClient) { }

  obtenerDatosJson(url: string): Observable<any> {
    return this.http.get(url);
  }

  transferirDatos(dato: Tutorial | null) {
    this.datosTransferidos.next(dato);
  }

  obtenerDatosTransferidos(): Observable<Tutorial | null> {
    return this.datosTransferidos.asObservable();
  }
}
