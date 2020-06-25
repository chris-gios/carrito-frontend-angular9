import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/service/auth.service';
import { map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog // prueba
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    return this.authService.hasUser().pipe(
      map(user => user === null ? false : true),
      tap(hasUser => {
        if (!hasUser) {
          this.router.navigate(['']); // te envia a esa ruta si no eres admin
          this.openLogin();

          // this.router.navigate(['/auth/login']);
        }
      })
    );
  }

  //Prueba para que si intentan entrar al admin les abra el popup de login
  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
