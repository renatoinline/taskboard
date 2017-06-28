import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TarefaComponent } from '../tarefa/TarefaComponent';
import { Estoria } from '../../entities/Estoria';
import { Tarefa } from '../../entities/Tarefa';

@Component({
    selector: 'estoria',
    templateUrl: 'app/components/estoria/EstoriaComponent.html'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    @Output()
    removed:EventEmitter<Estoria> = new EventEmitter();

    showHideTarefas: boolean = false;

    remove(event: Event, estoria: Estoria) {
        event.preventDefault();
        this.removed.emit(estoria);
    }

    removerTarefa(tarefa: Tarefa) {
        let index = this.estoria.tarefas.findIndex(element => element.id === tarefa.id);
        this.estoria.tarefas.splice(index, 1);
    }

    toggleTarefas(event: Event) {
        event.preventDefault();
        this.showHideTarefas = !this.showHideTarefas;
    }
}