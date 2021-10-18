import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/pages/login.component';
import { AlumnosEditComponent } from './pages/alumnos/alumnos-edit.component';
import { AlumnoListComponent } from './pages/alumnos/alumnos-list.component';
import { CursosComponent } from './pages/cursos/cursos-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumnosEdit', component: AlumnosEditComponent },
  { path: 'cursos', component: CursosComponent },
  {
    path: 'home',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
