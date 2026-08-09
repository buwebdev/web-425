import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
      </header>

      <main>
        <h3>{{ welcome }}</h3>
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      width: 65%;
      margin: 0 auto;
    }

    header {
      background-color: #333;
      color: white;
      padding: 10px;
    }

    main {
      padding: 10px;
    }
  `
})
export class AppComponent {
  title: string = "Unit Testing Demo";
  welcome: string = "Welcome to the Unit Testing Demo!";
}
