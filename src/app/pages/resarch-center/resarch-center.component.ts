import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { ResarchCenterSectionComponent } from "../../shared/components/resarch-center-section/resarch-center-section.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";

@Component({
  selector: 'app-resarch-center',
  standalone: true,
  imports: [CommonModule, TranslateModule, PageTitleComponent, ResarchCenterSectionComponent, FooterComponent, HeaderComponent],
  templateUrl: './resarch-center.component.html',
  styleUrl: './resarch-center.component.scss'
})
export class ResarchCenterComponent {

}
