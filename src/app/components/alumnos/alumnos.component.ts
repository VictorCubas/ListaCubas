import { Component, OnDestroy } from '@angular/core';
import { AlumnosService } from './alumnos.service';
import { Alumno } from 'src/app/models/alumno.model';
import { Observable, Subject, Subscription, interval, map, observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnDestroy {
  // private alumnosSubscription: Subscription;
  private intervalSubscription: Subscription | undefined;
  // alumnos: Alumno[] = [];
  alumnosAsync: Observable<Alumno[]>;
  public destroyed = new Subject<boolean>();
  cantidadAlumnos: number = 1;

  constructor(private alumnosService: AlumnosService){
    this.alumnosAsync = this.alumnosService.getAlumnos().pipe(
      map(alumnos => alumnos.map(alumno => ({
        ...alumno, // Mantenemos todas las propiedades del alumno original
        name: alumno.name.toUpperCase() // Modificamos solo la propiedad "name"
      })))
    );
    this.loadDataInterval();
  }


  loadDataInterval(): void{
    // Creamos un observable que emita cada 3 segundos
    const observable = interval(3000);

    this.intervalSubscription = observable.pipe(
       takeUntil(this.destroyed)
      ).subscribe(() => {
        console.log('OBSERVABLE INTERVAL....');

        //agregamos un alumno para demostrar la funcionalidad del observable
        const nuevoAlumno: Alumno =  {
                "id": ++this.cantidadAlumnos,
                "name": "Pepe Lopez",
                "dateOfBirth": new Date('02/10/2001'),
                "modalidad": "Presencial",
                "description": "Deseos y ganas de aprender",
                "image": "../assets/images/estudiante1.jpg",
                "gender": "Male",
                "price": "650",
                "coderBeca": true
            }

          this.alumnosService.createAlumno(nuevoAlumno);
    });
  }


  ngOnDestroy(): void {
    console.log('SE DETUVO EL OLBSERVABLE DE INTERVAL');
    this.destroyed.next(true);
  }
}
