import { Tarefa } from './Tarefa';

export class Estoria {
    id: number;
    titulo: string;
    descricao: string;
    pontos: number;
    tarefas: Tarefa[]
}