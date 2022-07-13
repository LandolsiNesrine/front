import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';

import { Router } from '@angular/router';

import { LanguageService } from 'src/app/core/services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';

  // set the currenr year
  year: number = new Date().getFullYear();

  listLang = [
    { text: 'lang.fr', lang: 'fr' },
    { text: 'lang.en', lang: 'en' },
    { text: 'lang.ar', lang: 'ar' },
  ];

  cookieValue;
  langName;
  public langSelected = null;

  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    public languageService: LanguageService,
    public _cookiesService: CookieService) {
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.langName = val.map(element => element.text);
    if (this.langSelected == null) {
      this.langSelected = 'lang.fr';
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]], //, Validators.email //'admin@themesbrand.com'
      password: [null, [Validators.required]], //'123456'
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid)
      return;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        response => {
          if (response['code'] === '200') {
            sessionStorage.setItem('token', response['payload']['token']);
            this.router.navigate(['/']);
          } else if (response['code'] === '201') {
            this.error = 'login.error.access';
          } else {
            this.error = 'login.error.incorrect';
          }
        },
        error => {
          this.error = 'common.error.globa';
        });

  }

  setLanguage(text: string, lang: string) {
    this.langName = text;
    this.langSelected = text;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

}
