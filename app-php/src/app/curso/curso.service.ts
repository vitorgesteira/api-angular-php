import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "http://localhost/api/php/";

  //Vetor
  vetor: Curso[] = [] ;

  //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res: any)=>{
        this.vetor = res['cursos'];
        console.log(res.cursos)
        return this.vetor;
      })
    )
    }
}