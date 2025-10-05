import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { AboutComponent as AboutSectionComponent } from "../../shared/components/about/about.component";
import { BenefitsComponent } from "../../shared/components/benefits/benefits.component";
import { DegreesComponent } from "../../shared/components/degrees/degrees.component";
import { PrinciplesComponent } from "../../shared/components/principles/principles.component";
import { VisionComponent } from "../../shared/components/vision/vision.component";
import { MissionGoalsComponent } from "../../shared/components/mission-goals/mission-goals.component";
import { HistoryComponent } from "../../shared/components/history/history.component";
import { StatsComponent } from "../../shared/components/stats/stats.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    HistoryComponent,
    StatsComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
