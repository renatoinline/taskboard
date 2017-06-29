import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    public tarefaForm = this.fb.group({
        id: [0],
        titulo: ["", Validators.required],
        descricao: ["", Validators.required]
    });

    constructor(public fb: FormBuilder) {}

    salvarTarefa(event: Event){
        let novaTareva = <Tarefa> this.tarefaForm.value;
        novaTareva.id = this.estoria.tarefas.length + 1;
        this.estoria.tarefas.push(novaTareva);
        console.log(novaTareva);
    }

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