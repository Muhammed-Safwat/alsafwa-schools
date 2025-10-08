import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-principles',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
