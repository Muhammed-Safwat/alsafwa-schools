import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { AutoLanguageLinkDirective } from "../../shared/core/directives/auto-language-link.directive";
import { CounterService } from "../../shared/core/services/counter.service";

declare var AOS: any;

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, HeaderComponent, PageTitleComponent, FooterComponent, AutoLanguageLinkDirective],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent implements AfterViewInit {

  constructor(private counterService: CounterService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
      
      // إعادة تهيئة PureCounter باستخدام الخدمة
      this.counterService.initializeCounters();
    }, 100);
  }
}
