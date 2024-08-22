import alterarConclusaoTarefa from "@/backend/casos-uso/alterar-conclusao-tarefa";
import excluirTarefa from "@/backend/casos-uso/excluir-tarefa";
import obterTarefas from "@/backend/casos-uso/obter-tarefa";
import salvarTarefa from "@/backend/casos-uso/salvar-tarefa";
import { Tarefa } from "@/core/model/Tarefa";
import { useEffect, useState } from "react";

export default function useTarefas() {{
    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    useEffect(() => {
        carregar()
    }, [])

    async function carregar() {
        const tarefas = await obterTarefas()
        setTarefas(tarefas)
    }

    async function adicionar(tarefa: Tarefa) {
        const novaTarefa = await salvarTarefa(tarefa)
        setTarefas([...tarefas, novaTarefa])
    }

    async function alternarConclusao(tarefa: Tarefa) {
        const novaTarefa = await alterarConclusaoTarefa(tarefa)
        setTarefas(tarefas.map(t => t.id === novaTarefa.id ? novaTarefa : t))
    }

    async function excluir(tarefaId: string) {
        const tarefa = await excluirTarefa(tarefaId)
        setTarefas(tarefas.filter(t => t.id !== tarefa.id))
    }

    return {
        tarefas,
        adicionar,
        excluir,
        alternarConclusao
    }
}}