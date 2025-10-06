import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {


  ngOnInit() {
    this.initMobileNav();
  }

  ngOnDestroy() {

  }

  private initMobileNav() {
    // Wait for DOM to be ready
    setTimeout(() => {
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      const navmenu = document.querySelector('#navmenu');
      const navmenuUl = document.querySelector('#navmenu ul') as HTMLElement;

      function mobileNavToogle() {
        const body = document.querySelector('body');
        const isActive = body?.classList.contains('mobile-nav-active');

        if (isActive) {
          // Close menu
          body?.classList.remove('mobile-nav-active');
          if (navmenuUl) {
            navmenuUl.style.display = 'none';
            navmenuUl.style.opacity = '0';
            navmenuUl.style.transform = 'translateX(100%)';
          }
        } else {
          // Open menu
          body?.classList.add('mobile-nav-active');
          if (navmenuUl) {
            navmenuUl.style.display = 'block';
            navmenuUl.style.opacity = '0';
            navmenuUl.style.transform = 'translateX(100%)';

            // Animate in
            setTimeout(() => {
              navmenuUl.style.opacity = '1';
              navmenuUl.style.transform = 'translateX(0)';
            }, 10);
          }
        }

        // Toggle icon
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.toggle('bi-list');
          mobileNavToggleBtn.classList.toggle('bi-x');
        }
      }

      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
      }

      // Hide mobile nav on same-page/hash links
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
          }
        });
      });
    }, 100);
  }
}
