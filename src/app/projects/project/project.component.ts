import { Component, input } from '@angular/core';

import { project } from '../project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  project = input.required<project>();
}
