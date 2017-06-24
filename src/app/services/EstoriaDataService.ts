import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http' ;
import { Observable } from 'rxjs/Observable' ;
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/operator/map' ;

import { Estoria } from '../entities/Estoria';

@Injectable()
export class EstoriaDataService {
    
    private apiEstorias = 'http://localhost:3002/estorias';
    constructor(private http: Http) { }
    
    
    getEstorias() : Observable<Estoria[]>{
        return this.http.get(this.apiEstorias)
        .map(this.extrairDados)
        .catch(this.handleError);
    }

    private extrairDados(res: Response){
        let body = <Estoria[]> res.json();
        return body || {};
    }

    private handleError(error: Response | any){
        return Observable.throw(error.json().error || "Erro no servidor");
    }
}