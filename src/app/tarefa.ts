export class Tarefa {
    public id?: number
    public descricao: string
    public concluida: boolean = false

    constructor(descricao: string) {
        this.descricao = descricao;
    }

}
