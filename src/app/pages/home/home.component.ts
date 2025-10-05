import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

declare var AOS: any;
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { AboutComponent } from "../../shared/components/about/about.component";
import { BenefitsComponent } from "../../shared/components/benefits/benefits.component";
import { DegreesComponent } from "../../shared/components/degrees/degrees.component";
import { StatsComponent } from "../../shared/components/stats/stats.component";
import { RecentNewsComponent } from "../../shared/components/recent-news/recent-news.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent, BannerComponent, AboutComponent, BenefitsComponent, DegreesComponent , StatsComponent, RecentNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

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
