import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// componentes
import { AppComponent } from './app/components/app/AppComponent';
import { TaskboardComponent } from './app/components/taskboard/TaskboardComponent';
import { EstoriaDataService } from './app/services/EstoriaDataService';
import { EstoriaComponent } from './app/components/estoria/EstoriaComponent';

const appRoutes: Routes = [
    { path: '' , redirectTo: 'taskboard' , pathMatch: 'full' },
    { path: 'taskboard', component: TaskboardComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, TaskboardComponent, EstoriaComponent ],
    bootstrap: [ AppComponent ],
    providers: [EstoriaDataService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);