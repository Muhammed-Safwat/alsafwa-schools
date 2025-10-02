import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSwitcherComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
}) 
export class HomeComponent implements OnInit {
 

  ngOnInit() {
    
  }
}
