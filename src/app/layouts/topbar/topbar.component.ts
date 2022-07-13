import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../core/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { CurrentUser } from 'src/app/shared/models/currentUser';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  cookieValue;
  langName;
  public langSelected = null;
  public currentUser = new CurrentUser();

  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private authService: AuthenticationService,
    public languageService: LanguageService,
    public translate: TranslateService,
    public _cookiesService: CookieService) {
  }

  listLang = [
    { text: 'lang.fr', lang: 'fr' },
    { text: 'lang.en', lang: 'en' },
    { text: 'lang.ar', lang: 'ar' },
  ];

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.langName = val.map(element => element.text);
    if (this.langSelected == null) {
      this.langSelected = 'lang.fr';
    }

    this.whoiam();
  }

  setLanguage(text: string, lang: string) {
    this.langName = text;
    this.cookieValue = lang;
    this.langSelected = text;
    this.languageService.setLanguage(lang);
  }

  whoiam() {
    this.authService.whoiam()
      .subscribe(response => {
        if (response['code'] === '200') {
          this.currentUser = response['payload'];
          sessionStorage.setItem('currentUser', JSON.stringify(response['payload']));
        }
      },
      error => {
      });
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/account/login']);
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
}
