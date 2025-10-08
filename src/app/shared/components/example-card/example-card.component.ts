import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AutoLanguageLinkDirective } from '../../core/directives/auto-language-link.directive';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [RouterModule, TranslateModule, AutoLanguageLinkDirective],
  templateUrl: './example-card.component.html',
  styleUrls: ['./example-card.component.scss']
})
export class ExampleCardComponent {
  // This component demonstrates how to use the new design system
  // It shows proper usage of CSS custom properties and utility classes
}
