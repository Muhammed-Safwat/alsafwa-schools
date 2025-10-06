import { Component, AfterViewInit } from '@angular/core';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";

declare var AOS: any;

@Component({
  selector: 'app-faculty',
  imports: [FooterComponent, PageTitleComponent, HeaderComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss'
})
export class FacultyComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
