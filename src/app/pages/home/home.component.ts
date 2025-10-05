import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { AboutComponent } from "../../shared/components/about/about.component";
import { FeaturedProgramsComponent } from "../../shared/components/featured-programs/featured-programs.component";
import { StatsComponent } from "../../shared/components/stats/stats.component";
import { RecentNewsComponent } from "../../shared/components/recent-news/recent-news.component";
import { PreloaderComponent } from "../../shared/components/preloader/preloader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent, BannerComponent, AboutComponent, FeaturedProgramsComponent, StatsComponent, RecentNewsComponent, PreloaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  ngOnInit() {

  }
}
