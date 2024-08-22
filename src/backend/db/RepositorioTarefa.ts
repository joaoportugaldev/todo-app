import { PrismaClient } from "@prisma/client";
import { Tarefa } from "@/core/model/Tarefa";


export default class RepositorioTarefa {

    private db: PrismaClient

  constructor() {
    this.db = new PrismaClient();
  }

  async inserir(tarefa: Tarefa): Promise<Tarefa> {
    return this.db.tarefa.create({ data: tarefa });
  }

  async alterar(tarefa: Tarefa): Promise<Tarefa> {
    return this.db.tarefa.update({
      where: { id: tarefa.id },
      data: tarefa,
    });
  }

  async excluir(id: string) {
    return await this.db.tarefa.delete({where: {id}})
  }

  async obterTodos() {
    return await this.db.tarefa.findMany()
  }
}
