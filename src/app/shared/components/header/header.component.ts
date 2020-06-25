import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { AuthService } from 'src/app/core/service/auth.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0;
  total$: Observable<number>; // para no usar subcribe


  constructor(
    private authService: AuthService, // Prueba paravisualizar admin en header si es admin
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

  // ifAdmin() {
  //   return this.authService.hasUser().pipe(
  //     map(user => user === null ? false : true),
  //     tap(hasUser => {
  //       if (!hasUser) {


  //         this.router.navigate(['']); // te envia a esa ruta si no eres admin
  //         this.openLogin();

  //         this.router.navigate(['/auth/login']);
  //       }
  //     })
  //   );
  // }

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
