import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Estoria } from '../../entities/Estoria';

@Component({
    selector: 'estoria',
    templateUrl: 'app/components/estoria/EstoriaComponent.html'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    @Output()
    removed:EventEmitter<string> = new EventEmitter();

    remove() {
        this.removed.emit('complete');
    }
}