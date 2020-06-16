import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '', // '' redirecciona a una ruta especifica cuando entra al inicio de la pagina www.hola.com
    component: LayoutComponent, // todos los hijos aplican el html de layout
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full', // las rutas deben ser exactas o si no 404
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule) // esto es com promesas :,c
        // component: HomeComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule) // esto es com promesas :,c
        // component: ProductsComponent
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      }
      // {
      //   path: 'contact',
      //   canActivate: [AdminGuard], // para bloquear el acceso a rutas si no es admin
      //   component: ContactComponent
      // }
      // {
      //   path: 'products/:id', //parametro dinamico
      //   component: ProductDetailComponent
      // }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard], // para bloquear el acceso a rutas si no es admin
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**', // ** es si no encuentra la ruta
    // component: PageNotFoundComponent
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
