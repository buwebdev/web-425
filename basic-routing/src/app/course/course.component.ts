import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface CourseRouteData {
  courseCode: string;
  heading: string;
  description: string;
  concepts: string[];
}

@Component({
  selector: 'app-course',
  standalone: true,
  template: `
    <section class="w4-section" aria-labelledby="course-heading">
      <p class="w4-eyebrow">{{ routeData.courseCode }} route data</p>
      <h1 id="course-heading">{{ routeData.heading }}</h1>
      <p class="w4-page-intro">{{ routeData.description }}</p>

      <div class="w4-grid w4-grid-split">
        <article class="w4-panel">
          <h2>Data received by this page</h2>
          <dl class="route-data-list">
            <div>
              <dt>Course code</dt>
              <dd>{{ routeData.courseCode }}</dd>
            </div>
            <div>
              <dt>Concepts</dt>
              <dd>{{ routeData.concepts.join(', ') }}</dd>
            </div>
          </dl>
        </article>

        <aside class="w4-panel">
          <div>
            <p class="w4-kicker">Follow the data</p>
            <h2>How it works</h2>
          </div>
          <p>
            The route object stores these values in its <code>data</code>
            property. This component injects <code>ActivatedRoute</code>, reads
            <code>snapshot.data</code>, and binds the values in its template.
          </p>
        </aside>
      </div>
    </section>
  `,
  styles: `
    .route-data-list {
      display: grid;
      gap: 1rem;
      margin: 0;
    }

    .route-data-list div {
      border-bottom: 1px solid var(--w4-color-border);
      padding-bottom: 1rem;
    }

    .route-data-list div:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    dt {
      color: var(--w4-color-muted);
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    dd {
      margin: 0.25rem 0 0;
      font-weight: 700;
    }
  `
})
export class CourseComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly routeData = this.activatedRoute.snapshot.data as CourseRouteData;
}
