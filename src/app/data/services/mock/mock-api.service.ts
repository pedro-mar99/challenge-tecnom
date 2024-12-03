import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private response: any[] = [];

  constructor() { }

  saveResponse(data: any) {
    this.response.push(data);
    console.log("Respuestas guardadas", this.response)
    return of(true);
  }

  getResponse() {
    return this.response;
  }
}
