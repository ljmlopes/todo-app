import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  tarefas: Tarefa[] = []
  descricaoNovaTarefa: string = ''

  constructor(private tarefaService:TarefaService){ 
    this.tarefas = this.tarefaService.getTarefas()
  }

  addTarefa(){
    if (this.descricaoNovaTarefa.trim() !== '') {
      this.tarefaService.addTarefa(this.descricaoNovaTarefa);
      this.descricaoNovaTarefa = ''; // Limpar o campo de entrada
      this.tarefas = this.tarefaService.getTarefas(); // Atualizar a lista de tarefas exibida
  }
  }

  delTarefa(id?: number){
    if(id != undefined){
    this.tarefaService.delTarefa(id)
    this.tarefaService.getTarefas()
    }
  }

  concluirTarefa(id?: number){
    if(id != undefined){
      this.tarefaService.concluirTarefa(id)
      }
  }

}

