import { Component } from '@angular/core';

import { Estoria } from '../../entities/Estoria';
import { EstoriaDataService } from '../../services/EstoriaDataService';

@Component({
    selector: 'taskboard',
    templateUrl: 'app/components/taskboard/TaskboardComponent.html'
})
export class TaskboardComponent {
    
    estorias: Estoria[];
    errorMessage: any;

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

}