import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects, site, writing } from '../data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  protected readonly projects = projects;
  protected readonly site = site;
  protected readonly writing = writing;
}
