import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutoLanguageLinkDirective } from '../../core/directives/auto-language-link.directive';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
