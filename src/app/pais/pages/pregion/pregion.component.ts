import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pregion',
  templateUrl: './pregion.component.html',
  styles: [`
  button{
    margin-right: 10px;
  }
  `
  ]
})
export class PregionComponent  {
  regiones : string [] = ["africa", "americas", "asia", "europe", "oceania"];
  regionA : string = "";
  paises: Country [] = [];
  hayerror: boolean = false;

  constructor(private PaisS:PaisService) { }

  Activar(region:string){
    if(region === this.regionA){return;}
    this.regionA = region;
    this.PaisS.buscarReg(region)
    .subscribe(paises=> this.paises = paises);
  }

}
