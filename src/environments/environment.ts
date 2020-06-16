// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = { // para desarrollo
  production: false,
  url_api: 'https://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyB5M-KgjCVOszUSMDyJR8gm33ClmCoZ3uA',
    authDomain: 'carrito-frontend.firebaseapp.com',
    databaseURL: 'https://carrito-frontend.firebaseio.com',
    projectId: 'carrito-frontend',
    storageBucket: 'carrito-frontend.appspot.com',
    messagingSenderId: '29737706949',
    appId: '1:29737706949:web:426deddc0210d89bf897ac'  
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
