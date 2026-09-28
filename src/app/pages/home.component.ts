import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { projects, writing } from '../data';

@Component({
  selector: 'app-home', standalone: true, imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  projects = projects;
  writing = writing;
}
