import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Project = { slug: string; title: string; year: string; type: string; summary: string; glyph: string; tech: string[] };
type Writing = { slug: string; title: string; date: string; kind: string; excerpt: string; length: string };

@Component({
  selector: 'app-home', standalone: true, imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  projects: Project[] = [
    { slug: 'signal-drift', title: 'Signal Drift', year: '2026', type: 'software / product', summary: 'A speculative interface for finding calm in noisy systems — the place where a dashboard stops shouting and starts helping.', glyph: 'signal', tech: ['Angular', 'TypeScript', 'D3'] },
    { slug: 'midnight-index', title: 'Midnight Index', year: '2025', type: 'web / data', summary: 'A tiny archive engine for odd little datasets, built to make overlooked patterns feel strangely important.', glyph: 'index', tech: ['Node', 'SQLite', 'CSS'] },
    { slug: 'desert-radio', title: 'Desert Radio', year: '2025', type: 'creative code', summary: 'An interactive radio dial that turns a playlist into a map of fictional road stops, weather, and neon signs.', glyph: 'radio', tech: ['Web Audio', 'Canvas', 'Angular'] },
    { slug: 'ledger-burn', title: 'Ledger Burn', year: '2024', type: 'tooling / automation', summary: 'A small workflow tool that trims repetitive admin from student teams and leaves the useful parts behind.', glyph: 'ledger', tech: ['Python', 'CLI', 'GitHub'] }
  ];
  writing: Writing[] = [
    { slug: 'notes-from-exit-12', title: 'Notes from Exit 12', date: 'Aug 2026', kind: 'short story', excerpt: 'A late-night roadside story about a broken vending machine, a borrowed car, and a very specific kind of luck.', length: '7 min' },
    { slug: 'what-i-learned-making-things', title: 'What I learned making things', date: 'Jun 2026', kind: 'essay', excerpt: 'A field note on shipping small projects, keeping weird ideas alive, and getting better at the boring parts.', length: '5 min' },
    { slug: 'the-parts-between', title: 'The parts between', date: 'Apr 2026', kind: 'short story', excerpt: 'Three people wait for a bus that keeps saying it is two minutes away.', length: '4 min' }
  ];
}
