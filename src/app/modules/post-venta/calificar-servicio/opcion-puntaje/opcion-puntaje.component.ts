import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Mapping, Score } from 'src/app/data/interfaces/Encuesta.interface';
import { INTERNAL_ROUTES } from 'src/app/data/routes/internal.routes';
import { MockApiService } from 'src/app/data/services/mock/mock-api.service';

@Component({
  selector: 'app-opcion-puntaje',
  templateUrl: './opcion-puntaje.component.html',
  styleUrls: ['./opcion-puntaje.component.css'],
})
export class OpcionPuntajeComponent implements OnInit {
  @Input() mapping: Mapping | undefined;
  scoreList: Score[] = [];
  selectedScore: number | undefined;
  hoveredScore: number | undefined;
  showFirstAndLast: boolean = true;

  constructor(private mockApiService: MockApiService, private router: Router) {}

  ngOnInit(): void {
    this.setScores(this.mapping);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mapping'] && this.mapping) {
      this.setScores(this.mapping); //Cuando recibimos respuesta de la API llamamos al
    }                              //detector de cambios de estado para mostrar en la vista
  }

  setCurrentScore(value: number): void {
    this.selectedScore = value;     //Por medio de evento click cambiamos valores booleanos del Score seleccionado
    this.showFirstAndLast = false;
  }

  showTextFor(scoreNumber: number): void {
    this.hoveredScore = scoreNumber; //Cuando el usuario pasa el mouse por encima, se setea el hoveredScore
  }

  hideTextFor(scoreNumber: number): void {
    if (this.hoveredScore === scoreNumber) {
      this.hoveredScore = undefined;  //Cuando el usuario saca el mouse encima
    }
  }

  setScores(mapping: Mapping | undefined) { //Pasamos el input de mapping, donde creamos un array con cada uno de los 
    if (mapping) {                         //campos del objeto
      let number: number = 0;
      let text: string = '';
      Object.keys(mapping).forEach((key) => {
        number++;
        text = mapping[key as keyof Mapping];
        this.scoreList.push({ number, text });
      });
    }
  }

  sendMock() {  //Simulamos el envio de informacion, pasando numero y descripcion del puntaje seleccionado
    if (this.selectedScore) {
      this.mockApiService.saveResponse(
        this.scoreList.find((s) => s.number === this.selectedScore)
      ).subscribe(rta => {
        if (rta) { //Si rta === true navegamos al siguiente componente
          console.log("Envio exitoso.")
          this.router.navigate([INTERNAL_ROUTES.PV_FEEDBACK]);
        }
      })
    }
  }
}
