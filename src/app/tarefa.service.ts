import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = []
  private ultimoId: number = 0

  constructor() { }

  public addTarefa(descricao: string): void {
    const novaTarefa = new Tarefa(descricao)
    novaTarefa.id = ++this.ultimoId
    this.tarefas.push(novaTarefa)
  }

  public delTarefa(id?: number): void{
    const index = this.tarefas.findIndex(tarefa => tarefa.id === id)
    if(index != -1){
      this.tarefas.splice(index, 1)
    }
  }

  public concluirTarefa(id?: number): void{
    const index = this.tarefas.findIndex(tarefa => tarefa.id === id)
    if(index != -1){
      this.tarefas[index].concluida = true
    }
  }

  public getTarefas():Tarefa[]{
    return this.tarefas
  }
}
