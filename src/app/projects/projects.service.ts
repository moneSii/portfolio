import { Injectable, WritableSignal, signal } from '@angular/core';

import { project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectMasterList: WritableSignal<project[]> = signal([
    {
      id: 0,
      name: 'Pomomomo',
      content: {
        summary: 'yo',
        features: 'you',
        stack: 'you',
        upcoming: 'uyo',
      },
      status: 'In-Progess',
      version: '0.1.0',
    },
    {
      id: 1,
      name: 'Tackle',
      content: {
        summary: 'yo',
        features: 'you',
        stack: 'you',
        upcoming: 'uyo',
      },
      status: 'In-Progess',
      version: '0.1.0',
    },
    {
      id: 2,
      name: 'Orient',
      content: {
        summary: 'yo',
        features: 'you',
        stack: 'you',
        upcoming: 'uyo',
      },
      status: 'In-Progess',
      version: '0.1.0',
    },
  ]);

  get projects() {
    return this.projectMasterList.asReadonly();
  }
}
