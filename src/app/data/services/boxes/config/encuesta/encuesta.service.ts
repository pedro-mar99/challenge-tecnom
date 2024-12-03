import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http: HttpClient) { }

  public getEncuestas():Observable<any>{
    const url = "/api/v1/boxes/config/encuestas";
    const credentials = btoa("max@tecnom.com.ar:b0x3sApp");
    const headers = new HttpHeaders({
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get<any>(url, {headers})
  }
}
