import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project, projects } from '../data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
  protected readonly project?: Project;

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.project = projects.find((project) => project.slug === slug);
  }
}
