import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from './data/routes/internal.routes';

const routes: Routes = [
  {
    path: INTERNAL_PATHS.POST_VENTA_DEFAULT,
    loadChildren: () =>
      import('./modules/post-venta/post-venta.module').then(
        (m) => m.PostVentaModule
      ),
  },
  {
    path:'',
    redirectTo:INTERNAL_PATHS.POST_VENTA_DEFAULT,
    pathMatch:'prefix'
  },
  { path:"**",redirectTo:INTERNAL_PATHS.POST_VENTA_DEFAULT }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
