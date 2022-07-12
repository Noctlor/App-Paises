import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ppais',
  templateUrl: './ppais.component.html',
  styles: [`
         li{
          cursor: pointer;
         }
  `

  ]
})
export class PpaisComponent  {

  termino:string = ""
  hayerror: boolean = false;
  paises : Country[] = [];

  paisesSuge : Country[] = [];
  MonstrarSuge: boolean = false;

  constructor(private PaisS:PaisService){

  }
  buscar(termino:string){
    this.hayerror = false;
    this.termino = termino;
    this.MonstrarSuge = false;

    this.PaisS.buscarpais(termino)
    .subscribe( (paises)=>{    
      console.log(paises);
     this.paises = paises;

    },(err)=>{
     this.hayerror = true;
      this.paises = [];
    });
  }
  sugerencias(termino:string){
    this.MonstrarSuge = true;
    this.hayerror = false;
    this.termino = termino

    this.PaisS.buscarpais(termino)
    .subscribe(paises=>this.paisesSuge = paises.splice(0,5),
      (err)=> this.paisesSuge=[]
    )
    
  }
  buscarsuge(termino:string){

    this.buscar(termino);
  }

}
