import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SkeletonComponent,
    HeaderComponent,
    FooterComponent, 
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SkeletonComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
