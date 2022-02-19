import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STATIC_DATA_PATH } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProductListByCategory(): Observable<any>{
    return this.http.get<any>(`${STATIC_DATA_PATH}product.json`);
  }
}
