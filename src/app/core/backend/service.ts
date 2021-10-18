import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { alumnoDto } from '../interfaces/alumno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cursoDto } from '../interfaces/curso';
import { notasDto } from '../interfaces/notas';

@Injectable({
    providedIn: 'root'
})
export class Service {
    private url = environment.url + 'Alumno/';
    private urlCurso = environment.url + 'Curso/';
    private urlNotas = environment.url + 'Notas/';

    constructor(private http: HttpClient) {  
    }

    getAlumnos() : Observable<alumnoDto[]> {
        return this.http.get<alumnoDto[]>(this.url + "GetAll");
    }

    addAlumno(item: any): Observable<number> {
        return this.http.post<number>(this.url + "Create", item);
    }

    updateAlumno(item: any): Observable<number> {
        return this.http.post<number>(this.url + "Update", item);
    }

    getById(id: number): Observable<alumnoDto>{
        const url = `${this.url + 'GetById'}/${id}`;
        return this.http.get<alumnoDto>(url);
    }

    delete(id: number): Observable<number> {
        const url = `${this.url + 'Delete'}/${id}`;
        return this.http.delete<number>(url);
    }

    //cursos

    getCursos(): Observable<cursoDto[]> {
        return this.http.get<cursoDto[]>(this.urlCurso + "GetAll");
    }

    addNotas(item: any): Observable<number> {
        return this.http.post<number>(this.urlNotas + "Create", item);
    }

    updateNotas(item: any): Observable<number> {
        return this.http.post<number>(this.urlNotas + "Update", item);
    }

    getNotasByIdAlumno(idAlumno: number, idCurso: number): Observable<notasDto>{
        const url = `${this.urlNotas + 'GetByIdAlumno'}/${idAlumno}/${idCurso}`;
        return this.http.get<notasDto>(url);
    }
}