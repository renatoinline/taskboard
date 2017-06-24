import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// componentes
import { AppComponent } from './app/components/app/AppComponent';
import { TaskboardComponent } from './app/components/taskboard/TaskboardComponent';
import { EstoriaDataService } from './app/services/EstoriaDataService';

// const appRoutes: Routes = [
//     { path: '' , redirectTo: 'livros' , pathMatch: 'full' },
//     { path: 'livros', component: AcervoComponent },
//     { path: 'sobre', component: SobrePageComponent }
// ];

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [ AppComponent, TaskboardComponent ],
    bootstrap: [ AppComponent ],
    providers: [EstoriaDataService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);