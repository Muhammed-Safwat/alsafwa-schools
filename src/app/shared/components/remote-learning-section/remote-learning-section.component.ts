import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-remote-learning-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remote-learning-section.component.html',
  styleUrl: './remote-learning-section.component.scss'
})
export class RemoteLearningSectionComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
