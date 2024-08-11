import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <header>
        <h1>
          {{ title }}
        </h1>

      </header>

      <main>
        <nav class="navbar">
          <ul>
            <li><a href="/logger">Logger</a></li>
            <li><a href="/component-error">Component Error</a></li>
            <li><a href="/global-error">Global Error</a></li>
          </ul>
        </nav>

        <router-outlet />
      </main>

      <footer>
        &copy; 2024 - Angular Error Handling Demo
      </footer>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 65%;
      margin: 0 auto;
    }

    header {
      background-color: #f8f9fa;
      padding: 10px;
      width: 100%;
      text-align: center;
    }

    main {
      width: 100%;
      min-height: 500px;
    }

    .navbar ul {
      display: block;
      list-style-type: none;
      padding: 0;
    }

    .navbar {
      text-align: center;
    }

    li {
      display: inline;
      margin-right: 10px;
    }

    footer {
      background-color: #f8f9fa;
      padding: 10px;
      width: 100%;
      height: 80px;
      text-align: center;
    }
  `
})
export class AppComponent {
  title = 'Error Handling Demo';
}
