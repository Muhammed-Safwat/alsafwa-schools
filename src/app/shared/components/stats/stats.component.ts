import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutoLanguageLinkDirective } from '../../core/directives/auto-language-link.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule, AutoLanguageLinkDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

}
