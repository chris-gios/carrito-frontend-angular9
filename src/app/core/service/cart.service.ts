import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]); // para que el carrito inicie con 0 producto uso el array vacio

  cart$ = this.cart.asObservable(); // variable publica preguntada por cualquier componente (no entendi :c)

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products); // le notifica a todos los componentes que algo se agrego al carrito
  }
}
