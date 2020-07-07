import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  facebook = 'https://www.facebook.com/christian.giraldoospina';
  instagram = 'https://www.instagram.com/chris.gios/';
  linkedin = 'https://www.linkedin.com/in/christian-giraldo-ospina/';
  twitter = 'https://twitter.com/Chris_gios';
  github = 'https://github.com/chris-gios';
  youtube = 'https://www.youtube.com/channel/UC8OUdA1hcDOupLc1zU1EgLA?view_as=subscriber';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon/facebook.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon/instagram.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon/linkedin.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon/twitter.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon/github.svg'));
    iconRegistry.addSvgIcon('youtube', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon/youtube.svg'));

    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    // this.emailField.valueChanges // lee todo lo que se digite en el input de emailfield (mas poderoso que ngModel)
    //   .subscribe(value => {
    //     console.log(value);
    //   });
  }

  ngOnInit(): void {
  }

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.valid);
    }
  }

}
