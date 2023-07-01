import { Component } from '@angular/core';
import { alumnos } from 'src/assets/data/alumnos.data';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  alumnos = alumnos;
}
