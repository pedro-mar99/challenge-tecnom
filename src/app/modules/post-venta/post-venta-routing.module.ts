import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { INTERNAL_PATHS } from "src/app/data/routes/internal.routes";
import { CalificarServicioComponent } from "./calificar-servicio/calificar-servicio.component";
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
    {
      path:'', 
      children:[
        {path:INTERNAL_PATHS.POST_VENTA_CALIFICAR, component: CalificarServicioComponent},
        {path:INTERNAL_PATHS.POST_VENTA_FEEDBACK, component: FeedbackComponent},
        {path:'**', redirectTo:INTERNAL_PATHS.POST_VENTA_CALIFICAR},  
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PostVentaRoutingModule {}