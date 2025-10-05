import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-degrees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
