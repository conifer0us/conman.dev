import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { site } from './data';

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
        <a routerLink="/" fragment="work">work</a>
        <a routerLink="/" fragment="writing">writing</a>
        <a routerLink="/" fragment="about">about</a>
        <a routerLink="/" fragment="contact">contact</a>
      </nav>
      <button class="mode-switch" type="button" (click)="toggleMode()" [attr.aria-label]="nightMode() ? 'Switch to day mode' : 'Switch to night mode'">
        <span class="mode-icon" [class.moon]="nightMode()"></span>
        <span>{{ nightMode() ? 'night' : 'day' }}</span>
      </button>
    </header>
    <main><router-outlet /></main>
    <footer class="site-footer">
      <div class="footer-mark">conman.dev</div>
      <p>sample footer line — replace me with your own final word.</p>
      <div class="footer-links">
        <a [href]="site.goodreads" target="_blank" rel="noreferrer">goodreads</a>
        <a [href]="site.letterboxd" target="_blank" rel="noreferrer">letterboxd</a>
      </div>
      <div class="ink-lines" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
    </footer>
  </div>`,
  styles: []
})
export class AppComponent {
  site = site;
  nightMode = signal(this.readMode());
  toggleMode(): void {
    const next = !this.nightMode();
    this.nightMode.set(next);
    try { localStorage.setItem('conman-mode', next ? 'night' : 'day'); } catch {}
  }
  private readMode(): boolean {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('conman-mode');
      if (saved === 'night') return true;
      if (saved === 'day') return false;
    }
    return this.isNightByClock();
  }
  private isNightByClock(): boolean {
    const hour = new Date().getHours();
    return hour < 7 || hour >= 19;
  }
}
