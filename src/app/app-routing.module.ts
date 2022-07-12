import  {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PpaisComponent } from './pais/pages/ppais/ppais.component';
import { PregionComponent } from './pais/pages/pregion/pregion.component';
import { PcapitalComponent } from './pais/pages/pcapital/pcapital.component';
import { VpaisComponent } from './pais/pages/vpais/vpais.component';


const routes:Routes = [
   { 
    path : "",
    component : PpaisComponent,
    pathMatch: 'full'
    },
    {
        path : "region",
        component : PregionComponent,
    },
    {
        path: "capital",
        component : PcapitalComponent
    },
    {
        path: "pais/:id",
        component : VpaisComponent
    },
    {
        path: '**',
        redirectTo : ""
    }
]



@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule {}