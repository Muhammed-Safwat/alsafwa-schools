import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { ISupportedLanguages } from '../../core/interfaces/supported-languages';
 
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  constructor(private languageService: LanguageService) {
    console.log('LanguageSwitcherComponent: Initializing...');
    console.log('LanguageSwitcherComponent: Current language:', this.languageService.getCurrentLanguage());
  }

  get currentLang(): ISupportedLanguages {
    const lang = this.languageService.getCurrentLanguage();
    console.log('LanguageSwitcherComponent: Getting current language:', lang);
    return lang;
  }

  get currentDirection() {
    const direction = this.languageService.direction();
    console.log('LanguageSwitcherComponent: Getting current direction:', direction);
    return direction;
  }

  get isRTL() {
    const isRTL = this.languageService.isRTL();
    console.log('LanguageSwitcherComponent: Getting isRTL:', isRTL);
    return isRTL;
  }

  changeLanguage(lang: ISupportedLanguages) {
    console.log('LanguageSwitcherComponent: Changing language to:', lang);
    this.languageService.changeLanguage(lang);
  }
}
