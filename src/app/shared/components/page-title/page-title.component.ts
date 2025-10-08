import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() homeText: string = 'breadcrumb.home';
  @Input() currentPage: string = '';
}
