import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-goals.component.html',
  styleUrls: ['./mission-goals.component.scss']
})
export class MissionGoalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
