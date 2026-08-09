import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Basic Routing Demo'
  },
  {
    path: 'course',
    component: CourseComponent,
    title: 'Route Data | Basic Routing Demo',
    data: {
      courseCode: 'WEB 425',
      heading: 'Passing TypeScript data to a routed page',
      description: 'This content is defined in app.routes.ts and read by CourseComponent.',
      concepts: ['Routes.data', 'ActivatedRoute', 'Component templates']
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Basic Routing Demo'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found | Basic Routing Demo'
  }
];
