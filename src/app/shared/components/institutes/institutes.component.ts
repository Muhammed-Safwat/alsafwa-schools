import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

declare var AOS: any;

@Component({
  selector: 'app-institutes-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './institutes.component.html',
  styleUrl: './institutes.component.scss'
})
export class InstitutesSectionComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}