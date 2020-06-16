import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { MatDialog } from '@angular/material/dialog';
import { FormProductComponent } from '../form-product/form-product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe(rta => {
        this.fetchProducts();
      });
  }

  openCreateProduct() {
    const dialogRef = this.dialog.open(FormProductComponent, {
      height: '450px',
      width: '400px',
    });
  }
}
