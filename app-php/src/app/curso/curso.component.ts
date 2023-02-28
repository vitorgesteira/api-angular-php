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
  url = "http://localhost/api-angular-php/php/";

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
  cadastro(c: Curso){
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[])=>{
        
        //Adicionando dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;  

        //Atualizar a listagem
        this.selecao();
      }
    )
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
  alterar(c: Curso){
    this.curso_servico.atualizarCurso(this.curso).subscribe(
      (res) => {

        //Atualizar
        this.vetor = res;

        //Limpar os valores do objeto
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        //Atualiza a listagem
        this.selecao(); 
      }
    )
  }

  //Remover
  remover(c: Curso){
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0 ;

      }
    )
  }

  //Selecionar curso especifico
  selecionarCurso(c: Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}