import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { RemoteLearningSectionComponent } from "../../shared/components/remote-learning-section/remote-learning-section.component";

declare var AOS: any;

@Component({
  selector: 'app-remote-learning',
  standalone: true,
  imports: [CommonModule, TranslateModule, PageTitleComponent, FooterComponent, HeaderComponent, RemoteLearningSectionComponent],
  templateUrl: './remote-learning.component.html',
  styleUrl: './remote-learning.component.scss'
})
export class RemoteLearningComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
