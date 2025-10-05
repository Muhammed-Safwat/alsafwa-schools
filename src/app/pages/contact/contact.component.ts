import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { ContactComponent as ContactSectionComponent } from "../../shared/components/contact/contact.component";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent, PageTitleComponent, ContactSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  ngOnInit() {

  }
}
