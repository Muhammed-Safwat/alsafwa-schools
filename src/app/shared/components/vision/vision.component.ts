import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
