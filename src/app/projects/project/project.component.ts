import { Component, input, signal, effect, OnInit } from '@angular/core';
import { project } from '../project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  project = input.required<project>();

  status = signal(false);
  show = false;
  firstInit = true;
  cardSize = 'card';

  constructor() {
    effect(() => {
      if (this.status()) {
        this.cardSize = 'card inflate';
      } else {
        if (this.firstInit) {
          this.cardSize = 'card';
          this.firstInit = false;
        } else {
          this.cardSize = 'card deflate';
        }
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, this.project().id * 750);
  }

  onPress() {
    this.status.update((val) => !val);
  }
}
