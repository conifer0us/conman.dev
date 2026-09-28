import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { writing, Writing } from '../data';

@Component({
  selector: 'app-writing-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing-detail.component.html'
})
export class WritingDetailComponent {
  protected readonly post?: Writing;

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.post = writing.find((entry) => entry.slug === slug);
  }
}
