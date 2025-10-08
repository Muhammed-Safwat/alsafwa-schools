import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { CounterService } from "../../shared/core/services/counter.service";

declare var AOS: any;

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent, PageTitleComponent, HeaderComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss'
})
export class FacultyComponent implements AfterViewInit {

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
