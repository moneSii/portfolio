import { Component, inject } from '@angular/core';

import { ProjectComponent } from './project/project.component';

import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);

  projectList = this.projectsService.projects;
}
