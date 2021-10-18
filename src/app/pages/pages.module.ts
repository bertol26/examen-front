import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AlumnoListComponent } from './alumnos/alumnos-list.component';
import { AlumnosEditComponent } from './alumnos/alumnos-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos-list.component';
import { NotasComponent } from './notas/notas.component';

@NgModule({
    declarations: [ AlumnoListComponent, AlumnosEditComponent, CursosComponent, NotasComponent],
    imports: [ CommonModule, PrimengModule, FormsModule, ReactiveFormsModule ],
    exports: [],
    entryComponents: [
		NotasComponent
	],
    providers: [],
})
export class PagesModule {}