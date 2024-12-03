import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/data/interfaces/Encuesta.interface';
import { WorkShop } from 'src/app/data/interfaces/WorkShop.interface';
import { EncuestaService } from 'src/app/data/services/boxes/config/encuesta/encuesta.service';
import { WorkShopService } from 'src/app/data/services/places/workShop/workShop.service';

@Component({
  selector: 'app-calificar-servicio',
  templateUrl: './calificar-servicio.component.html',
  styleUrls: ['./calificar-servicio.component.css'],
})
export class CalificarServicioComponent implements OnInit {
  encuesta: Encuesta | undefined
  constructor(
    private workShopService: WorkShopService,
    private encuestaService: EncuestaService
  ) {}

  ngOnInit(): void {
    this.getFirstWorkShop();
    this.getEncuesta();
  }

  getFirstWorkShop() {
    this.workShopService.getAllWorkShops().subscribe((response) => {
      this.selectWorkShop(response[0]); //Tomamos el primer elemento del array.
    });
  }
  selectWorkShop(workShop: WorkShop) {
    this.workShopService.setWorkShop(workShop); //Seteamos current workShop en servicio para acceder desde otros componentes
  }

  getEncuesta() {
    this.encuestaService.getEncuestas().subscribe((response) => {
      this.encuesta = response
    });
  }
}
