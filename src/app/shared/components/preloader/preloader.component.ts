import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderService } from '../../core/services/preloader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  private subscription: Subscription = new Subscription();

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    this.subscription = this.preloaderService.isLoading$.subscribe(
      (loading) => {
        this.isLoading = loading;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
