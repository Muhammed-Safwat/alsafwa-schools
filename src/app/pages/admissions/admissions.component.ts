import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";

declare var AOS: any;

@Component({
  selector: 'app-admissions',
  imports: [RouterModule, HeaderComponent, PageTitleComponent, FooterComponent],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
