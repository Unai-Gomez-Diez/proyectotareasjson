import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from 'src/app/json-service.service';
import { Tutorial } from 'src/app/models/tutorial';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  datoSeleccionado: Tutorial | null = null;
  datol: Tutorial | null = null;
  constructor(private jsonService: JsonServiceService) { }


  ngOnInit(): void {
    // Suscríbete al Observable del servicio para recibir los datos transferidos
    this.jsonService.obtenerDatosTransferidos().subscribe(dato => {
      this.datoSeleccionado = dato;
      this.datol = this.datoSeleccionado
      // Haz algo con los datos recibidos
    });
  }
}
