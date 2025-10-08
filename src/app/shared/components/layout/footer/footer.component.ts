import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoLanguageLinkDirective } from '../../../core/directives/auto-language-link.directive';
import { TranslateModule } from '@ngx-translate/core';
 
@Component({
  selector: 'app-footer',
  imports: [RouterModule, AutoLanguageLinkDirective,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
