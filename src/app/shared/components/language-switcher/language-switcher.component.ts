import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { ISupportedLanguages } from '../../core/interfaces/supported-languages';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  constructor(private languageService: LanguageService) {}

  get currentLang(): ISupportedLanguages {
    return this.languageService.currentLanguage();
  }

  get currentDirection() {
    return this.languageService.direction();
  }

  get isRTL() {
    return this.languageService.isRTL();
  }

  changeLanguage(lang: ISupportedLanguages) {
    this.languageService.changeLanguage(lang);
  }
}
