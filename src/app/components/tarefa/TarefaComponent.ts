import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Tarefa } from '../../entities/Tarefa';

@Component({
    selector: 'tarefa',
    templateUrl: 'app/components/tarefa/TarefaComponent.html'
})
export class TarefaComponent {
    @Input() tarefa: Tarefa;

    @Output()
    tarefaRemoved:EventEmitter<Tarefa> = new EventEmitter();

    removerTarefa(event: Event, tarefa: Tarefa) {
        event.preventDefault();
        this.tarefaRemoved.emit(tarefa);
    }
}