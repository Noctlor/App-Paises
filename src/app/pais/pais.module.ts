import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PcapitalComponent } from './pages/pcapital/pcapital.component';
import { PpaisComponent } from './pages/ppais/ppais.component';
import { PregionComponent } from './pages/pregion/pregion.component';
import { VpaisComponent } from './pages/vpais/vpais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';





@NgModule({
  declarations: [
    PcapitalComponent,
    PpaisComponent,
    PregionComponent,
    VpaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    PcapitalComponent,
    PpaisComponent,
    PregionComponent,
    VpaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
