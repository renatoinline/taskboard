import { Component } from '@angular/core';


import { Estoria } from '../../entities/Estoria';
import { Tarefa } from '../../entities/Tarefa';
import { EstoriaDataService } from '../../services/EstoriaDataService';
import { EstoriaComponent } from '../estoria/EstoriaComponent';

@Component({
    selector: 'taskboard',
    templateUrl: 'app/components/taskboard/TaskboardComponent.html'
})
export class TaskboardComponent {
    
    estorias: Estoria[];
    errorMessage: string;

    constructor(private estoriaDataService: EstoriaDataService){}

    ngOnInit() {
        this.getEstorias();
    }

    private getEstorias(): void {
        this.estoriaDataService.getEstorias()
            .subscribe(
                estorias => this.estorias = estorias,
                error => this.errorMessage = <any> error);
    }

    remove(estoria: Estoria) {        
        let index = this.estorias.findIndex(element => element.id === estoria.id);
        this.estorias.splice(index, 1);
    }

}