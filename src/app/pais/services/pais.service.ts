import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private api: string = "https://restcountries.com/v2"

  get httparams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population')
  }

  constructor(private http:HttpClient) { }

  buscarpais(termino:string) : Observable<Country[]>{
    const url = `${this.api}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httparams});

  }
  buscarcapital(termino:string): Observable<Country[]>{
    const url = `${this.api}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httparams});
  }
  getpais(termino:string): Observable<Country>{
    const url = `${this.api}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }
  buscarReg(termino:string): Observable<Country[]>{   

    const url = `${this.api}/region/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httparams}); 
  }
}
