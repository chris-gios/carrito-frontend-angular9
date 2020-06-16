import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  title = 'carrito-frontend';
  nuevo = '';
  id = '';

  items = ['Chris', 'Chris2', 'Chris3'];

  objeto = {};

  power = 10;

  ngOnInit(): void {

  }

  addItem(nuevo) {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }



}
