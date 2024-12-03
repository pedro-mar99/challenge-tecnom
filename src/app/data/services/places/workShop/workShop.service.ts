import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WorkShop } from '../../../interfaces/WorkShop.interface';

@Injectable({
  providedIn: 'root'
})

export class WorkShopService {

  constructor(private http: HttpClient) { }

  private workShopSubject = new BehaviorSubject<WorkShop | null>(null)
  currentWorkShop$ = this.workShopSubject.asObservable();
  
  public setWorkShop(newWorkShop: WorkShop){
    this.workShopSubject.next(newWorkShop);
  }

  public getAllWorkShops():Observable<WorkShop[]>{
    const url = "/api/v1/places/workshops";
    const credentials = btoa("max@tecnom.com.ar:b0x3sApp");
    const headers = new HttpHeaders({
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get<WorkShop[]>(url, {headers})
  }
}
