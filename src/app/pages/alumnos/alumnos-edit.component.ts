import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/core/backend/service';

@Component({
    selector: 'app-alumnos-edit',
    templateUrl: './alumnos-edit.component.html'
})
export class AlumnosEditComponent implements OnInit {
    formAlumno : FormGroup = this.renderFormGroup();

    constructor(private router: Router, 
                private service: Service,
                private routeReceiver: ActivatedRoute) { }

    ngOnInit(): void {
        this.routeReceiver.queryParams.subscribe(params => {
          if (params.id) {
              this.service.getById(params.id).subscribe(res => this.formAlumno.patchValue(res));
          }
        });
     }

    submit() {
      if (this.formAlumno.value){
          let id = this.formAlumno.value.id;
          if (id == null) {
              this.service.addAlumno(this.formAlumno.value).subscribe(res => {
                  if (res == 1) {
                      this.router.navigateByUrl('alumnos');
                  }
              });
          } else {
            this.service.updateAlumno(this.formAlumno.value).subscribe(res => {
                if (res == 1) {
                    this.router.navigateByUrl('alumnos');
                }
            });
          }
      }
    }

    back() {
        this.router.navigateByUrl('alumnos');
    }

    private renderFormGroup() {
        return new FormGroup({
          nombres: new FormControl(null),
          apellidos: new FormControl(null),
          fechaNacimiento: new FormControl(null),
          sexo: new FormControl(null),
          id: new FormControl(null),
        })
      }
}
