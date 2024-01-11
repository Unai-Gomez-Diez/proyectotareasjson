import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial'
import { JsonServiceService } from 'src/app/json-service.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  datoSeleccionado: Tutorial | null = null;

  constructor(private jsonService: JsonServiceService) { }

  ngOnInit(): void {
    // Suscríbete al Observable del servicio para recibir los datos transferidos
    this.jsonService.obtenerDatosTransferidos().subscribe(dato => {
      this.datoSeleccionado = dato;
      // Haz algo con los datos recibidos
    });
  }
}
