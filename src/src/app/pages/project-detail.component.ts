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
        <img [src]="p.art" [alt]="p.title + ' illustration'">
      </div>

      <div class="detail-copy">
        <div class="detail-copy-block" *ngFor="let section of p.sections">
          <h2>{{ section.heading }}</h2>
          <p>{{ section.body }}</p>
        </div>
        <div class="detail-tags"><span *ngFor="let tech of p.tech">{{ tech }}</span></div>
      </div>
    </div>

    <div class="screenshot-strip">
      <div class="screenshot-caption">SCREENSHOTS / PROCESS / RECEIPTS</div>
      <div class="mock-shot" *ngFor="let shot of p.screenshots">
        <ng-container *ngIf="shot.src; else screenshotPlaceholder">
          <figure class="real-shot"><img [src]="shot.src" [alt]="shot.alt" loading="lazy"><figcaption>{{ shot.caption }}</figcaption></figure>
        </ng-container>
        <ng-template #screenshotPlaceholder>
          <div class="mock-ui" aria-hidden="true"><div class="mock-bar"></div><div class="mock-block"></div><div class="mock-block short"></div><div class="mock-chart"></div></div>
        </ng-template>
        <span>{{ shot.caption }}</span>
      </div>
    </div>
  </section>
  <section class="detail-page empty-state" *ngIf="!project">
    <a class="back-link" routerLink="/">← back to the road</a><h1>Nothing parked here.</h1><p>That project does not exist yet.</p>
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
