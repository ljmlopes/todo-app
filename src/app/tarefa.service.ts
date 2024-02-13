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

  public getTarefas():Tarefa[]{
    return this.tarefas
  }
}
