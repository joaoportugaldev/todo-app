import { Tarefa } from "@/core/model/Tarefa";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface TarefaFormProps {
  salvar: (tarefa: Tarefa) => void;
}

export default function TarefaForm(props: TarefaFormProps) {
  const [nome, setNome] = useState("");

  async function submeter() {
    await props.salvar({ nome, concluida: false })
    setNome('')
  }

  return (
    <div className="flex items-center bg-zinc-900 p-2 rounded-md">
      <input
        type="text"
        value={nome}
        className=" flex-1 text-white bg-transparent outline-none px-2"
        onChange={(e) => setNome(e.target.value)}
        onKeyUp={e => e.key === "Enter" && submeter()}
      />

      <button
        onClick={submeter}
        className="bg-zinc-600 p-2 rounded-md"
      >
        <IconPlus/>
      </button>
    </div>
  );
}
