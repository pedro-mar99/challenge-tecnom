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
      this.setScores(this.mapping);
    }
  }

  setCurrentScore(value: number): void {
    this.selectedScore = value;
    this.showFirstAndLast = false;
  }

  showTextFor(scoreNumber: number): void {
    this.hoveredScore = scoreNumber;
  }

  hideTextFor(scoreNumber: number): void {
    if (this.hoveredScore === scoreNumber) {
      this.hoveredScore = undefined;
    }
  }

  setScores(mapping: Mapping | undefined) {
    if (mapping) {
      let number: number = 0;
      let text: string = '';
      Object.keys(mapping).forEach((key) => {
        number++;
        text = mapping[key as keyof Mapping];
        this.scoreList.push({ number, text });
      });
    }
  }

  sendMock() {
    if (this.selectedScore) {
      this.mockApiService.saveResponse(
        this.scoreList.find((s) => s.number === this.selectedScore)
      ).subscribe(rta => {
        if (rta) {
          console.log("Envio exitoso.")
          this.router.navigate([INTERNAL_ROUTES.PV_FEEDBACK]);
        }
      })
    }
  }
}
