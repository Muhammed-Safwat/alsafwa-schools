import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-recent-news',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './recent-news.component.html',
  styleUrl: './recent-news.component.scss'
})
export class RecentNewsComponent {

}
