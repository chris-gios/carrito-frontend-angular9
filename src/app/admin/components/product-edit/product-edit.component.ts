import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product)
      });
    });
  }

  saveProduct(event: Event) { // se puede sin el event y sin $event
    event.preventDefault(); // se esto y el event para que no recarge la pagina (que lo hace por defecto el form de HTML)
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
    }
    // console.log(this.form.value); // muestra un json en pantalla
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      // id: ['', [Validators.required]], //no es necesario si se edita
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField(){ // metodo de get
    return this.form.get('price');
  }

}
