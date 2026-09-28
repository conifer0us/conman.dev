import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <div class="site-shell" [class.night-mode]="nightMode()">
    <div class="grain"></div>
    <header class="topbar">
      <a class="wordmark" routerLink="/" aria-label="conman.dev home">conman<span>.dev</span></a>
      <nav class="nav" aria-label="Primary navigation">
        <a href="#work">work</a><a href="#writing">writing</a><a href="#about">about</a><a href="#contact">contact</a>
      </nav>
      <button class="mode-switch" type="button" (click)="toggleMode()" [attr.aria-label]="nightMode() ? 'Switch to day mode' : 'Switch to night mode'">
        <span class="mode-icon" [class.moon]="nightMode()"></span><span>{{ nightMode() ? 'night' : 'day' }}</span>
      </button>
    </header>
    <main><router-outlet /></main>
    <footer class="site-footer">
      <div class="footer-mark">conman.dev</div>
      <p>sample footer line — replace me with your own final word.</p>
      <div class="footer-links"><a href="https://www.goodreads.com/" target="_blank" rel="noreferrer">goodreads</a><a href="https://letterboxd.com/" target="_blank" rel="noreferrer">letterboxd</a></div>
    </footer>
  </div>`,
  styles: []
})
export class AppComponent {
  nightMode = signal(this.isNightByClock());
  toggleMode(): void { this.nightMode.update(v => !v); }
  private isNightByClock(): boolean { const hour = new Date().getHours(); return hour < 7 || hour >= 19; }
}
