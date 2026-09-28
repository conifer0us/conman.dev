import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProjectDetailComponent } from './pages/project-detail.component';
import { WritingDetailComponent } from './pages/writing-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'conman.dev' },
  { path: 'projects/:slug', component: ProjectDetailComponent, title: 'Project | conman.dev' },
  { path: 'writing/:slug', component: WritingDetailComponent, title: 'Writing | conman.dev' },
  { path: '**', redirectTo: '' }
];
