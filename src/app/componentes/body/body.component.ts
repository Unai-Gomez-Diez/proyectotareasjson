import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JsonServiceService } from '../../json-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  datosJson: any;
  datoSeleccionado: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerDatosJson();
  }

  obtenerDatosJson() {
    let url = 'http://localhost:5000/tareas'

    this.http.get(url).subscribe(data => {
      this.datosJson = data;
      console.log(this.datosJson);
    })
  }
  obtenerDatoJson(id: number) {
    let url = 'http://localhost:5000/tareas';

    this.http.get(url).subscribe((data: any) => {
      // Aquí seleccionamos el primer elemento de la lista
      this.datoSeleccionado = data.tareas[0];
      console.log(this.datoSeleccionado);
    });
  }
}
