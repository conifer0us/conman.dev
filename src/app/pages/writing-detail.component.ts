import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({selector:'app-writing-detail',standalone:true,imports:[CommonModule,RouterLink],template:`
<section class="detail-page writing-detail">
  <a class="back-link" routerLink="/">← back to the road</a>
  <div class="detail-hero"><p class="kicker">WRITING / {{ slug }}</p><h1>{{ title }}</h1><p class="detail-lede">Sample intro copy. This page is intentionally spacious so your real work can breathe.</p></div>
  <article class="article-body"><p>Replace this with your story or essay. The page is set up for long-form reading: comfortable measure, deliberate spacing, and a little visual noise around the edges.</p><p>Another paragraph goes here. Write normally, then let the layout do some of the work.</p><blockquote>“Put your favorite line from the piece here.”</blockquote><p>More writing here. You can later extend this with markdown, a CMS, or content files without changing the visual language.</p></article>
</section>`,styles:[]})
export class WritingDetailComponent { slug='story'; title='Writing title'; constructor(route: ActivatedRoute){ const s=route.snapshot.paramMap.get('slug') || 'story'; this.slug=s; this.title=s.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' '); } }
