import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-error-page',
  imports: [RouterModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
