import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { site } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
  <div class="site-shell" [class.night-mode]="nightMode()" [class.mode-transitioning]="modeTransition()" [class.to-night]="transitionTarget()">
    <div class="grain"></div>

    <header class="topbar">
      <a class="wordmark" [routerLink]="['/']" fragment="top" aria-label="conman.dev home">conman<span>.dev</span></a>
      <nav class="nav" aria-label="Primary navigation">
        <a [routerLink]="['/']" fragment="work">work</a>
        <a [routerLink]="['/']" fragment="writing">writing</a>
        <a [routerLink]="['/']" fragment="about">about</a>
        <a [routerLink]="['/']" fragment="contact">contact</a>
      </nav>
      <button class="mode-switch" type="button" (click)="toggleMode()" [disabled]="modeTransition()" [attr.aria-label]="nightMode() ? 'Switch to day mode' : 'Switch to night mode'">
        <span class="mode-switch-icon" aria-hidden="true">
          <span class="sun-mini" *ngIf="!nightMode()"></span>
          <span class="moon-mini" *ngIf="nightMode()"></span>
        </span>
        <span>{{ nightMode() ? 'night' : 'day' }}</span>
      </button>
    </header>

    <div class="cosmic-corner" [class.is-switching]="modeTransition()" [class.to-night]="transitionTarget()" aria-hidden="true">
      <img class="cosmic-icon cosmic-icon-sun" src="assets/illustrations/sun-chaos.svg" alt="">
      <img class="cosmic-icon cosmic-icon-moon" src="assets/illustrations/moon-chaos.svg" alt="">
    </div>

    <div class="desert-margin-canvas" aria-hidden="true">
      <img
        *ngFor="let mark of marginMarks; let i = index"
        class="desert-margin-mark"
        [class.right]="mark.side === 'right'"
        [class.tall]="mark.kind === 'mesa'"
        [src]="'assets/illustrations/' + mark.file"
        alt=""
        [style.top]="getMarginTop(i)"
        [style.width.px]="mark.size"
        [style.transform]="getMarginTransform(i)"
      >
    </div>

    <main><router-outlet /></main>

    <footer class="site-footer">
      <div class="footer-social-kicker">Check out what I'm checking out</div>
      <div class="footer-main">
        <div class="footer-brand">conman<span>.dev</span></div>
        <div class="footer-quote"><span>“{{ site.footerQuote }}”</span> <a [href]="site.footerQuoteSource" target="_blank" rel="noreferrer">-HST</a></div>
        <div class="footer-social">
          <div class="footer-links">
            <a [href]="site.goodreads" target="_blank" rel="noreferrer" aria-label="Goodreads">
              <svg class="social-logo social-logo-book" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h8.5c2 0 3.5 1.4 3.5 3.4V19H9.5C7 19 5 17.6 5 15.4Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M17 7.5c0-1.9 1.4-3 3-3v14.1c0 .9-.7 1.6-1.6 1.6H9.4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 8h5.5M8 11h5.5M8 14h4" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              <span>goodreads</span>
            </a>
            <a [href]="site.letterboxd" target="_blank" rel="noreferrer" aria-label="Letterboxd">
              <svg class="social-logo social-logo-film" viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
              <span>letterboxd</span>
            </a>
          </div>
        </div>
      </div>
      <div class="ink-lines" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
    </footer>
  </div>`,
  styles: []
})
export class AppComponent {
  site = site;
  marginMarks = [
    { file: 'cactus-simple.svg', kind: 'cactus', side: 'left', size: 48 },
    { file: 'scorpion-simple.svg', kind: 'scorpion', side: 'right', size: 78 },
    { file: 'mesa-simple.svg', kind: 'mesa', side: 'left', size: 92 },
    { file: 'cactus-simple.svg', kind: 'cactus', side: 'right', size: 44 },
    { file: 'scorpion-simple.svg', kind: 'scorpion', side: 'left', size: 70 },
    { file: 'mesa-simple.svg', kind: 'mesa', side: 'right', size: 98 },
    { file: 'cactus-simple.svg', kind: 'cactus', side: 'left', size: 52 },
    { file: 'scorpion-simple.svg', kind: 'scorpion', side: 'right', size: 66 }
  ];
  getMarginTop(index: number): string {
    const count = this.marginMarks.length;
    return `calc(${((index + 1) / (count + 1)) * 100}% - 40px)`;
  }
  getMarginTransform(index: number): string {
    const rotate = [-7, 4, -2, 6, -5, 3, -3, 7][index] ?? 0;
    return `translateY(-50%) rotate(${rotate}deg)`;
  }
  nightMode = signal(this.readMode());
  modeTransition = signal(false);
  transitionTarget = signal(this.nightMode());
  private transitionTimer?: ReturnType<typeof setTimeout>;

  toggleMode(): void {
    if (this.modeTransition()) return;

    const next = !this.nightMode();
    this.transitionTarget.set(next);
    this.modeTransition.set(true);

    try { localStorage.setItem('conman-mode', next ? 'night' : 'day'); } catch {}

    this.transitionTimer = setTimeout(() => {
      this.nightMode.set(next);
      this.modeTransition.set(false);
    }, 1100);
  }

  private readMode(): boolean {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('conman-mode');
      if (saved === 'night') return true;
      if (saved === 'day') return false;
    }
    const hour = new Date().getHours();
    return hour < 7 || hour >= 19;
  }
}
