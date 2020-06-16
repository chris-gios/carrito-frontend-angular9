import { Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() // variable que viene de una capa externa (padre.html) a una capa interna (hijo)
    product: Product;

    @Output() // variable que va de una capa interna (hijo) a una externa (padre)
    productClicked: EventEmitter<any> = new EventEmitter();
    // productClicked = new EventEmitter<any>(); opcion2

    today = new Date();

    addCart() {
        console.log('anadir al carrito');
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }

    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //   console.log('2. ngOnChanges');
    //   console.log(changes);
    // }

    ngOnInit() {
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

}
