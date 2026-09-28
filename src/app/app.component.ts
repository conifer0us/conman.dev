import { Component, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { site } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  protected readonly site = site;
  protected readonly nightMode = signal(this.readMode());
  protected readonly visualNight = signal(this.nightMode());
  protected readonly modeTransition = signal(false);

  private transitionTimer?: ReturnType<typeof setTimeout>;
  private static readonly modeDuration = 1100;

  toggleMode(): void {
    if (this.modeTransition()) return;

    const next = !this.nightMode();
    this.modeTransition.set(true);
    this.visualNight.set(next);
    this.persistMode(next);

    this.transitionTimer = setTimeout(() => {
      this.nightMode.set(next);
      this.modeTransition.set(false);
    }, AppComponent.modeDuration);
  }

  ngOnDestroy(): void {
    if (this.transitionTimer) clearTimeout(this.transitionTimer);
  }

  private persistMode(night: boolean): void {
    try {
      localStorage.setItem('conman-mode', night ? 'night' : 'day');
    } catch {
      // Ignore storage failures; the current mode still works for this visit.
    }
  }

  private readMode(): boolean {
    try {
      const saved = localStorage.getItem('conman-mode');
      if (saved === 'night') return true;
      if (saved === 'day') return false;
    } catch {
      // Fall back to the local time when storage is unavailable.
    }

    const hour = new Date().getHours();
    return hour < 7 || hour >= 19;
  }
}
