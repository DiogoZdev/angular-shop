import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
readonly url = 'http://localhost/3001/products';
  
  constructor(private http: HttpClient) { }

  showAlert(msg: string) {
    alert(msg);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }
}
