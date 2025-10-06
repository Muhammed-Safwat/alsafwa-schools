import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { HistoryComponent } from "../../shared/components/history/history.component";
import { StatsComponent } from "../../shared/components/stats/stats.component";
import { InstitutesComponent } from '../institutes/institutes.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    HistoryComponent,
    InstitutesComponent,
    StatsComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  ngOnInit() {

  }

}
