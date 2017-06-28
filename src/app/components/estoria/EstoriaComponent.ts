import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TarefaComponent } from '../tarefa/TarefaComponent';
import { Estoria } from '../../entities/Estoria';

@Component({
    selector: 'estoria',
    templateUrl: 'app/components/estoria/EstoriaComponent.html'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    @Output()
    removed:EventEmitter<string> = new EventEmitter();

    showHideTarefas: boolean = false;

    remove(event: Event, estoria: Estoria) {
        event.preventDefault();
        this.removed.emit(estoria.id.toString());
    }

    toggleTarefas(event: Event) {
        event.preventDefault();
        console.log("antes: " + this.showHideTarefas);
        this.showHideTarefas = !this.showHideTarefas;
        console.log("depois: " + this.showHideTarefas);
    }
}