import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Service } from 'src/app/core/backend/service';
import { alumnoDto } from 'src/app/core/interfaces/alumno';
import { cursoDto } from 'src/app/core/interfaces/curso';
import { NotasComponent } from '../notas/notas.component';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos-list.component.html'
})
export class CursosComponent implements OnInit {

    cursos: cursoDto[];
    idAlumno: number;
    alumno: alumnoDto;

    constructor(private service: Service, private routerActive: ActivatedRoute,
        public dialogService: DialogService, private router: Router,
        private messageService: MessageService) { }

    ngOnInit(): void { 
        this.routerActive.queryParams.subscribe(params => {
          if (params.id) {
              this.idAlumno = params.id;
              this.service.getById(params.id).subscribe(res => this.alumno = res);
          }
        })
        this.getCursos();
    }

    getCursos() {
        this.service.getCursos().subscribe(res => this.cursos = res);
    }

    addNota(row: any){
        const ref = this.dialogService.open(NotasComponent, {
            data: {
             idAlumno: this.idAlumno,
             idCurso: row.id
            },
            header: 'Notas',
            width: '30%'
        });
        ref.onClose.subscribe(res => {
            if (res == 1) {
                this.messageService.add({severity:'success', summary:'Notas', detail:'Notas actualizadas correctamente'});
            }
        })
    }

    backAlumnos(){
        this.router.navigateByUrl('alumnos');
    }
}
