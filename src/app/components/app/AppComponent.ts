import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { TaskboardComponent } from '../taskboard/TaskboardComponent';

@Component({
    selector: 'meu-app',
    templateUrl: 'app/components/app/AppComponent.html'
})
export class AppComponent {
    titulo: string = "Taskboard";
}