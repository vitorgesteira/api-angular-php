import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor:Curso[] = [];

  //Objeto da classe Curso
  curso = new Curso();

  //construtor
  constructor(private curso_servico:CursoService){}

  //Inicializador
  ngOnInit(): void {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  //Cadastro
  cadastro():void{
    alert("Cadastro");
  }

  //Seleção
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res)=>{
        this.vetor = res;
      }
      
    )
  }

  //Alterar
  alterar():void{
    alert("Alterar");
  }

  //Remover
  remover():void{
    alert("Remover");
  }

}
