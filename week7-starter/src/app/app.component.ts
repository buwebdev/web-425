import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="w4-shell">
      <header class="w4-header">
        <div class="w4-container w4-header-inner">
          <a routerLink="/" class="w4-brand" aria-label="Virtual Taco Stand home">
            <img src="/assets/virtual-taco-stand.svg" alt="Virtual Taco Stand" class="w4-brand-image" />
          </a>

          <div class="w4-account">
            @if (email) {
              <div class="w4-account-copy">
                <span class="w4-account-label">Signed in as</span>
                <span class="w4-account-value">{{ email }}</span>
              </div>
              <button type="button" class="w4-btn w4-btn-primary" (click)="signout()">Sign Out</button>
            } @else {
              <a routerLink="/signin" class="w4-btn w4-btn-primary">Sign In</a>
            }
          </div>
        </div>

        <nav class="w4-navbar" aria-label="Primary navigation">
          <div class="w4-container w4-nav">
            <a class="w4-nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
            <a class="w4-nav-link" routerLink="/menu" routerLinkActive="active">Menu</a>
            <a class="w4-nav-link" routerLink="/order" routerLinkActive="active">Order</a>
            <a class="w4-nav-link" routerLink="/daily-specials" routerLinkActive="active">Daily Specials</a>
            <a class="w4-nav-link" routerLink="/feedback" routerLinkActive="active">Feedback</a>
          </div>
        </nav>
      </header>

      <main id="main-content" class="w4-container w4-main">
        <router-outlet />
      </main>

      <footer class="w4-footer">
        <div class="w4-container w4-footer-inner">
          <div>
            <p class="w4-footer-brand">Virtual Taco Stand</p>
            <p class="w4-footer-copy">Downtown flavor, made fresh around the clock.</p>
          </div>
          <nav class="w4-footer-nav" aria-label="Footer navigation">
            <a routerLink="/">Home</a>
            <a routerLink="/menu">Menu</a>
            <a routerLink="/order">Order</a>
            <a routerLink="/daily-specials">Daily Specials</a>
            <a routerLink="/feedback">Feedback</a>
          </nav>
          <p class="w4-footer-copyright">&copy; {{ currentYear }} Virtual Taco Stand</p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  email?: string;
  readonly currentYear = new Date().getFullYear();

  constructor(private authService: AuthService, private cookieService: CookieService) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      this.email = isAuth ? this.cookieService.get('session_user') : undefined;
    });
  }

  signout() {
    this.authService.signout();
  }
}
