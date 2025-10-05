import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";

@Component({
  selector: 'app-faculty',
  imports: [FooterComponent, PageTitleComponent, HeaderComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss'
})
export class FacultyComponent {

}
