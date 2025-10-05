import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
