import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0;
  total$: Observable<number>; // para no usar subcribe


  constructor(
    private cartService: CartService,
    public dialog: MatDialog
  ) {
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
    // .subscribe(total => { // va aumentando el valor de carrito
    //   // console.log(total);
    //   this.total = total;
    // });
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignIn() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
