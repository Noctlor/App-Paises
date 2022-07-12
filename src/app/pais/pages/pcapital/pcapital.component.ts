import { Component, Input } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pcapital',
  templateUrl: './pcapital.component.html',
  styles: [
  ]
})
export class PcapitalComponent{


  termino:string = ""
  hayerror: boolean = false;
  paises : Country[] = [];

  constructor(private PaisS:PaisService){

  }
  buscar(termino:string){
    this.hayerror = false;
    this.termino = termino;

    this.PaisS.buscarcapital(termino)
    .subscribe( (paises)=>{   
     this.paises = paises;

    },(err)=>{
     this.hayerror = true;
      this.paises = [];
    });
  }
}
