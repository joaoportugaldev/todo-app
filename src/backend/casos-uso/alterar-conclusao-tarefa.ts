"use server";

import { Tarefa } from "@/core/model/Tarefa";
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function alterarConclusaoTarefa(tarefaAtual: Tarefa): Promise<Tarefa> {
  const repo = new RepositorioTarefa();

  const tarefaAtualizada = {
    ...tarefaAtual,
    concluida: !tarefaAtual.concluida,
  };

  if (!tarefaAtualizada.id) {
    throw new Error("Tarefa não encontrada");
  }

  return await repo.alterar(tarefaAtualizada)
}
