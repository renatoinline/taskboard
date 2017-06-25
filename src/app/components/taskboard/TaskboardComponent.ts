import { Component } from '@angular/core';


import { Estoria } from '../../entities/Estoria';
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
        console.log(this.estorias);
    }

    private getEstorias(): void {
        this.estoriaDataService.getEstorias()
            .subscribe(
                estorias => this.estorias = estorias,
                error => this.errorMessage = <any> error);
    }

    remove(event: Event) {
        //todo
        console.log("remover");
    }

}