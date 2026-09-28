import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { writing, Writing } from '../data';

@Component({
  selector:'app-writing-detail', standalone:true, imports:[CommonModule,RouterLink],
  template:`
  <section class="detail-page" *ngIf="post as p">
    <a class="back-link" routerLink="/">← back to the road</a>
    <div class="detail-hero writing-hero"><p class="kicker">{{ p.kind | uppercase }} / {{ p.date }}</p><h1>{{ p.title }}</h1><p class="detail-lede">{{ p.excerpt }}</p></div>
    <article class="article-body">
      <ng-container *ngFor="let paragraph of p.body; let i = index">
        <p>{{ paragraph }}</p>
        <blockquote *ngIf="i === 1 && p.pullQuote">“{{ p.pullQuote }}”</blockquote>
      </ng-container>
    </article>
  </section>
  <section class="detail-page empty-state" *ngIf="!post"><a class="back-link" routerLink="/">← back to the road</a><h1>Nothing written here.</h1><p>That piece does not exist yet.</p></section>`,
  styles:[]
})
export class WritingDetailComponent {
  post?: Writing;
  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.post = writing.find(p => p.slug === slug);
  }
}
