import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";

@Component({
  selector: 'app-admissions',
  imports: [HeaderComponent, PageTitleComponent, FooterComponent],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent {

}
