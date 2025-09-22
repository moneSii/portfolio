import { Component, input, signal } from '@angular/core';

import { project } from '../project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  project = input.required<project>();

  status = signal(false);

  onPress() {
    this.status.update((val) => !val);
  }
}
