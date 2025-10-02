import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private isVisibleSubject = new BehaviorSubject<boolean>(true);
  public isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();

  constructor() {
    // Auto-hide preloader after 3 seconds
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  /**
   * Show the preloader
   */
  show(): void {
    this.isVisibleSubject.next(true);
  }

  /**
   * Hide the preloader
   */
  hide(): void {
    this.isVisibleSubject.next(false);
  }

  /**
   * Toggle preloader visibility
   */
  toggle(): void {
    this.isVisibleSubject.next(!this.isVisibleSubject.value);
  }

  /**
   * Get current preloader state
   */
  get isVisible(): boolean {
    return this.isVisibleSubject.value;
  }

  /**
   * Show preloader for a specific duration
   * @param duration Duration in milliseconds
   */
  showFor(duration: number): void {
    this.show();
    setTimeout(() => {
      this.hide();
    }, duration);
  }
}
