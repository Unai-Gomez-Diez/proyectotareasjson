import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from 'src/app/models/tutorial';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  datosJson: Tutorial[] = [];
  datoSeleccionado: Tutorial | null = null;

  @Output() datoSeleccionadoEvent = new EventEmitter<Tutorial>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerDatosJson();
  }

  obtenerDatosJson() {
    let url = 'http://localhost:5000/tareas';

    this.http.get<Tutorial[]>(url).subscribe(
      (data: Tutorial[]) => {
        this.datosJson = data;
        console.log(this.datosJson);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  seleccionarDato(id: number) {
    const dato = this.datosJson.find((tarea: Tutorial) => tarea.id == id);


    this.datoSeleccionadoEvent.emit(dato);

  }
}
