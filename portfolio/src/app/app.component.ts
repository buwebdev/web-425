import { Component } from '@angular/core';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly title = 'Student Portfolio';
  readonly studentName = 'Your Name';
  readonly currentYear = new Date().getFullYear();

  readonly skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];

  readonly projects: PortfolioProject[] = [
    {
      title: 'Project One',
      description: 'Replace this text with a short explanation of the problem your project solves.',
      technologies: ['Angular', 'TypeScript']
    },
    {
      title: 'Project Two',
      description: 'Describe your contribution, the decisions you made, and what you learned.',
      technologies: ['HTML', 'CSS']
    },
    {
      title: 'Project Three',
      description: 'Add another course project or a personal project that represents your work.',
      technologies: ['Add', 'Your', 'Tools']
    }
  ];
}
