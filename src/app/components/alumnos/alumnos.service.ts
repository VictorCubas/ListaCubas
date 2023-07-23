import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, interval, takeUntil} from 'rxjs';
import { Alumno } from 'src/app/models/alumno.model';
import { alumnos } from 'src/assets/data/alumnos.data';

//provee de forma global
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[];
  private alumnos$ = new BehaviorSubject<Alumno[]>([])
  // private alumnosSubscription: Subscription;

  constructor() { 
    this.alumnos = alumnos;
    this.loadAlumnos();
  }

  loadAlumnosSetTimeOut(){
    

  }

  loadAlumnos(): void{
    this.alumnos$.next(this.alumnos)
  }

  getAlumnos(): Subject<Alumno[]>{
    return this.alumnos$;
  }

  createAlumno(alumno: Alumno): void{
    this.alumnos = [...this.alumnos, alumno];
    this.alumnos$.next(this.alumnos)
  }

  // onUnsubscribe(): void{
  //   if(this.alumnosSubscription){
  //     this.alumnosSubscription.unsubscribe();
  //   }
  // }

  // ngOnDestroy(): void {
  //   this.destroyed.next(true);
  // }
}
