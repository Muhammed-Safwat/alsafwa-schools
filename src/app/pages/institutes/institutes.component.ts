import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { InstitutesSectionComponent } from "../../shared/components/institutes/institutes.component";
declare var AOS: any;

@Component({
  selector: 'app-institutes',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent, PageTitleComponent, InstitutesSectionComponent],
  templateUrl: './institutes.component.html',
  styleUrl: './institutes.component.scss'
})
export class InstitutesComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
