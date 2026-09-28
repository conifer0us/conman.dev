import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({selector:'app-project-detail',standalone:true,imports:[CommonModule,RouterLink],template:`
<section class="detail-page">
  <a class="back-link" routerLink="/">← back to the road</a>
  <div class="detail-hero"><p class="kicker">PROJECT / {{ slug }}</p><h1>{{ title }}</h1><p class="detail-lede">Sample project write-up. Replace this with the story: what the problem was, what you built, why it mattered, and what you learned.</p></div>
  <div class="detail-layout"><div class="detail-art"><svg viewBox="0 0 700 400"><path d="M56 310 Q214 224 333 284 T652 256" class="sketch"/><path d="M90 284 L198 122 L260 214 L340 156 L452 292" class="mountain"/><circle cx="505" cy="126" r="54" class="sun"/><path d="M494 176 L494 302" class="signpole"/><path d="M449 194 Q500 180 546 192 L539 242 Q498 230 455 239 Z" class="sign"/></svg></div><div class="detail-copy"><h2>why it exists</h2><p>Sample: a tight paragraph about the motivation and context.</p><h2>how it works</h2><p>Sample: a clear technical description with screenshots, architecture notes, and the decisions you want an employer to notice.</p><h2>what I'd change</h2><p>Sample: the honest bit. A personal site gets more interesting when it admits where the first version was rough.</p><div class="detail-tags"><span>Angular</span><span>TypeScript</span><span>replace these</span></div></div></div>
</section>`,styles:[]})
export class ProjectDetailComponent { slug='project'; title='Project title'; constructor(route: ActivatedRoute){ const s=route.snapshot.paramMap.get('slug') || 'project'; this.slug=s; this.title=s.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' '); } }
