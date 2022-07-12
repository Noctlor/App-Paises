import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap , tap} from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-vpais',
  templateUrl: './vpais.component.html',
  styles: [
  ]
})
export class VpaisComponent implements OnInit {

  pais!: Country;

  constructor(private Activate: ActivatedRoute, private paisS:PaisService) { }

  ngOnInit(): void {
    this.Activate.params.
    pipe(
      switchMap(params => this.paisS.getpais(params['id']))
      )
    .subscribe( resp=> this.pais = resp);
  }

}
