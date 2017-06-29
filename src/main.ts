import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// componentes
import { AppComponent } from './app/components/app/AppComponent';
import { TaskboardComponent } from './app/components/taskboard/TaskboardComponent';
import { EstoriaComponent } from './app/components/estoria/EstoriaComponent';
import { TarefaComponent } from './app/components/tarefa/TarefaComponent';

// services
import { EstoriaDataService } from './app/services/EstoriaDataService';

const appRoutes: Routes = [
    { path: '' , redirectTo: 'taskboard' , pathMatch: 'full' },
    { path: 'taskboard', component: TaskboardComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    declarations: [ AppComponent, TaskboardComponent, EstoriaComponent, TarefaComponent ],
    bootstrap: [ AppComponent ],
    providers: [EstoriaDataService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);