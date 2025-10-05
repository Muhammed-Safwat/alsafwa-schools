import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { FooterComponent } from '../../shared/components/layout/footer/footer.component';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';
@Component({
  selector: 'app-privacy',
  imports: [ HeaderComponent, FooterComponent, PageTitleComponent ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

}
