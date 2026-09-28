import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects, Project } from '../data';

@Component({
  selector: 'app-project-detail', standalone: true, imports: [CommonModule, RouterLink],
  template: `
  <section class="detail-page" *ngIf="project as p">
    <a class="back-link" routerLink="/">← back to the road</a>
    <div class="detail-hero">
      <p class="kicker">PROJECT / {{ p.year }} / {{ p.status }}</p>
      <h1>{{ p.title }}</h1>
      <p class="detail-lede">{{ p.summary }}</p>
      <div class="detail-meta-row"><span>{{ p.role }}</span><span>·</span><span>{{ p.type }}</span></div>
    </div>

    <div class="detail-layout">
      <div class="detail-art project-detail-art">
        <svg viewBox="0 0 700 400" aria-label="Decorative project illustration">
          <path d="M56 310 Q214 224 333 284 T652 256" class="sketch"/>
          <path d="M90 284 L198 122 L260 214 L340 156 L452 292" class="mountain"/>
          <path d="M398 299 L476 184 L520 242 L603 168 L660 302" class="mountain back"/>
          <circle cx="505" cy="126" r="54" class="sun"/>
          <circle cx="505" cy="126" r="44" class="sun-inner"/>
          <path d="M494 176 L494 302" class="signpole"/>
          <path d="M449 194 Q500 180 546 192 L539 242 Q498 230 455 239 Z" class="sign"/>
          <text x="468" y="222" class="sign-text">{{ p.title | uppercase }}</text>
        </svg>
        <div class="scribble-note">replace this drawing with a real screenshot when the project has one.</div>
      </div>

      <div class="detail-copy">
        <div class="detail-copy-block"><h2>why it exists</h2><p>{{ p.problem }}</p></div>
        <div class="detail-copy-block"><h2>how it works</h2><p>{{ p.approach }}</p></div>
        <div class="detail-copy-block"><h2>what changed</h2><p>{{ p.outcome }}</p></div>
        <div class="detail-tags"><span *ngFor="let tech of p.tech">{{ tech }}</span></div>
      </div>
    </div>

    <div class="screenshot-strip">
      <div class="screenshot-caption"><span>001</span> SCREENSHOTS / PROCESS / RECEIPTS</div>
      <div class="mock-shot" *ngFor="let shot of p.screenshots; let n = index">
        <ng-container *ngIf="shot.src; else screenshotPlaceholder">
          <figure class="real-shot"><img [src]="shot.src" [alt]="shot.alt" loading="lazy"><figcaption>{{ shot.caption }}</figcaption></figure>
        </ng-container>
        <ng-template #screenshotPlaceholder>
          <div class="mock-ui" aria-hidden="true"><div class="mock-bar"></div><div class="mock-block"></div><div class="mock-block short"></div><div class="mock-chart"></div></div>
        </ng-template>
        <span>{{ shot.caption || ('drop screenshot ' + (n + 1) + ' here') }}</span>
      </div>
    </div>
  </section>
  <section class="detail-page empty-state" *ngIf="!project">
    <a class="back-link" routerLink="/">← back to the road</a><h1>Nothing parked here.</h1><p>That project slug does not exist yet.</p>
  </section>`,
  styles: []
})
export class ProjectDetailComponent {
  project?: Project;
  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.project = projects.find(p => p.slug === slug);
  }
}
