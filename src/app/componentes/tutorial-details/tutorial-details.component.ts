import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  @Input() datoSeleccionado: Tutorial | null = null;

  ngOnInit(): void {
    console.log('TutorialDetailsComponent initialized with datoSeleccionado:', this.datoSeleccionado?.texto);
  }
}
