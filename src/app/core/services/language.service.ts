import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages: string[] = ['en', 'fr', 'ar'];

  constructor(public translate: TranslateService, private cookieService: CookieService) {
    let browserLang;
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    }
    else {
      this.setLanguage('fr');
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/en|fr|ar/) ? browserLang : 'fr');
  }

  public setLanguage(lang) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
    this.setDirection();
  }

  getDir(): "rtl" | "ltr" {
    return this.cookieService.get('lang') === "ar" ? "rtl" : "ltr";
  }

  public setDirection() {
    document.getElementsByTagName("html")[0].setAttribute("dir", this.getDir());
  }

  public getLangugae() {
    return this.cookieService.get('lang');
  }

}
