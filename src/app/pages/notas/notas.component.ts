import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Service } from 'src/app/core/backend/service';

@Component({
    selector: 'app-notas',
    templateUrl: './notas.component.html'
})
export class NotasComponent implements OnInit {

    formNotas: FormGroup = this.renderFormGroup();

    constructor(public config: DynamicDialogConfig,public ref: DynamicDialogRef, private service: Service) {
        if (this.config.data){
            this.getNota(this.config.data.idAlumno, this.config.data.idCurso);
        }
     }

    ngOnInit(): void { }

    getNota(idAlumno: any, idCurso: any) {
        this.service.getNotasByIdAlumno(idAlumno, idCurso).subscribe(res => this.formNotas.patchValue(res));
    }

    submit(){
        if (this.formNotas.value){
            if (this.formNotas.value.id == null) {
               this.formNotas.value.idAlumno = parseFloat(this.config.data.idAlumno);
               this.formNotas.value.idCurso = parseFloat(this.config.data.idCurso);
               this.service.addNotas(this.formNotas.value).subscribe(res => {
                   if (res == 1) {
                       this.ref.close(res);
                   }
               });
            } else {
                this.service.updateNotas(this.formNotas.value).subscribe(res => {
                    if (res == 1) {
                        this.ref.close(res);
                    }
                });
            }
        }
    }

    private renderFormGroup() {
        return new FormGroup({
          id: new FormControl(null),
          idAlumno: new FormControl(null),
          idCurso: new FormControl(null),
          practica1: new FormControl(null),
          practica2: new FormControl(null),
          practica3: new FormControl(null),
          parcial: new FormControl(null),
          final: new FormControl(null),
          promedioFinal: new FormControl({value: '', disabled: true}),
        })
      }
}
