import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() homeText: string = 'الرئيسية';
  @Input() currentPage: string = '';
}
