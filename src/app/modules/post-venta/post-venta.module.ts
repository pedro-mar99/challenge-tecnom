import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificarServicioComponent } from './calificar-servicio/calificar-servicio.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PostVentaRoutingModule } from './post-venta-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { OpcionPuntajeComponent } from './calificar-servicio/opcion-puntaje/opcion-puntaje.component';

@NgModule({
  declarations: [
    CalificarServicioComponent,
    FeedbackComponent,
    OpcionPuntajeComponent
  ],
  imports: [
    CommonModule,
    PostVentaRoutingModule,
    LayoutModule,
    HttpClientModule,
  ]
})
export class PostVentaModule { }
