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

    <div class="mode-transition" [class.active]="transitioning()" [class.to-night]="nightMode()" aria-hidden="true">
      <svg class="transition-sky" viewBox="0 0 720 220" preserveAspectRatio="none">
        <defs>
          <path id="road-line" d="M-40 188 C170 150 334 210 760 164" />
        </defs>
        <circle class="transition-sun" cx="116" cy="128" r="36" />
        <path class="transition-sun-rays" d="M116 76v-18 M64 128H45 M168 128h19 M78 90L65 77 M154 90l13-13" />
        <circle class="transition-moon" cx="590" cy="86" r="28" />
        <circle class="transition-moon-cut" cx="602" cy="78" r="25" />
        <path class="transition-horizon" d="M0 170 C115 153 185 178 283 162 S468 151 720 169" />
        <g class="tumble tumble-one"><circle cx="0" cy="0" r="17"/><circle cx="0" cy="0" r="7"/><path d="M-15 0l30 0M-11-12l22 24M-10 13L11-13"/></g>
        <g class="tumble tumble-two"><circle cx="0" cy="0" r="12"/><circle cx="0" cy="0" r="4"/><path d="M-10 0l20 0M-8-8l16 16M-7 9L8-9"/></g>
        <g class="tumble tumble-three"><circle cx="0" cy="0" r="21"/><circle cx="0" cy="0" r="8"/><path d="M-18 0l36 0M-13-14l26 28M-15 16L15-16"/></g>
        <use href="#road-line" class="transition-road" />
      </svg>
      <div class="transition-scratch scratch-a"></div>
      <div class="transition-scratch scratch-b"></div>
      <div class="transition-copy">sun's changing shifts</div>
    </div>

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
  transitioning = signal(false);
  toggleMode(): void {
    const next = !this.nightMode();
    this.nightMode.set(next);
    try { localStorage.setItem('conman-mode', next ? 'night' : 'day'); } catch {}
    this.transitioning.set(false);
    setTimeout(() => this.transitioning.set(true), 10);
    setTimeout(() => this.transitioning.set(false), 1750);
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
