import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-degrees',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
