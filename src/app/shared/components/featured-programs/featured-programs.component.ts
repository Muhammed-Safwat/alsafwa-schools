import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AutoLanguageLinkDirective } from '../../core/directives/auto-language-link.directive';

@Component({
  selector: 'app-featured-programs',
  standalone: true,
  imports: [RouterModule, TranslateModule, AutoLanguageLinkDirective],
  templateUrl: './featured-programs.component.html',
  styleUrl: './featured-programs.component.scss'
})
export class FeaturedProgramsComponent {

}
