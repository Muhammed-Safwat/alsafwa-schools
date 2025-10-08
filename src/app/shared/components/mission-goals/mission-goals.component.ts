import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mission-goals',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mission-goals.component.html',
  styleUrls: ['./mission-goals.component.scss']
})
export class MissionGoalsComponent implements OnInit {
  missionItems$: Observable<string[]>;
  goalsItems$: Observable<string[]>;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.missionItems$ = this.translate.get('mission_goals.mission_items');
    this.goalsItems$ = this.translate.get('mission_goals.goals_items');
  }

  getMissionIcon(index: number): string {
    const icons = ['bi bi-heart', 'bi bi-person-check', 'bi bi-mortarboard', 'bi bi-lightbulb', 'bi bi-search', 'bi bi-shield-check', 'bi bi-arrow-left-right'];
    return icons[index % icons.length];
  }

  getGoalsIcon(index: number): string {
    const icons = ['bi bi-person-gear', 'bi bi-search', 'bi bi-book', 'bi bi-people', 'bi bi-trophy', 'bi bi-globe', 'bi bi-handshake'];
    return icons[index % icons.length];
  }
}
