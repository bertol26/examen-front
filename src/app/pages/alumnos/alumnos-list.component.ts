import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/core/backend/service';
import { alumnoDto } from 'src/app/core/interfaces/alumno';

@Component({
    selector: 'app-alumno-list',
    templateUrl: './alumnos-list.component.html',
})

export class AlumnoListComponent implements OnInit {

    alumnos: alumnoDto[] = [];

    constructor(private service: Service, private router: Router) { }

    ngOnInit(): void { 
        this.getAlumnos();
    }

    getAlumnos() {
        this.service.getAlumnos().subscribe(res => this.alumnos = res);
    }

    editAlumno(row: any){
      this.router.navigateByUrl(`alumnosEdit?id=${row.id}`)
    }

    deleteAlumno(row: any){
      this.service.delete(row.id).subscribe(res => {
          if (res == 1) {
              this.getAlumnos();

          }
      })
    }

    calificar(row: any){
        this.router.navigateByUrl(`cursos?id=${row.id}`)
    }

    openNew() {
      this.router.navigateByUrl('alumnosEdit');
    }
}
