import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Virtual Taco Stand</h1>
      <h2>The Virtual Taco Stand is located in the heart of downtown!</h2>
      <p>
        We specialize in good-ole home cooking. Our menu ranges from Tacos Al Pastor
        to our famous Birra Tacos. We also have a variety of daily specials that are
        sure to please your taste buds. We are open 24 hours a day, 7 days a week.
        Come on down and see us!
      </p>
      <p>
        Having a party? We cater! Give us a call and we will be happy to help you
        with your catering needs.
      </p>

      <div class="highlights-container">
        <div class="highlight">
          <img
            src="/assets/Downtown.png"
            alt="image of downtime with buildings and cars"
          />
          <p>
            Discover the heart of downtown flavor at our taco stand! Fresh, vibrant, and bursting with authentic Mexican cuisine, our tacos are a downtown must-try.
            Where every bite tells a story of tradition and taste.
          </p>
        </div>

        <div class="highlight">
          <img
            src="/assets/Stand.png"
            alt="image of a taco stand a guy standing there and a customer ordering a taco"
          />
          <!-- give me an item description for a guy standing at the standing selling tacos to customers-->
          <p>
            Welcome to our vibrant taco stand, where every bite is a fiesta!
            Join us for an unforgettable culinary journey, crafted by our passionate taco artisans.
            Dive into the freshest flavors in town, where each taco promises a blend of tradition and innovation.
            Your taste adventure starts here!
          </p>
        </div>

        <div class="highlight">
          <img src="/assets/Tacos.png" alt="image of three tacos side by side" />
          <p>Feast your eyes on our trio of tacos, a vibrant homage to authentic Mexican cuisine.
            Each taco is a masterpiece, carefully crafted with the freshest ingredients and bursting with flavors that transport you straight to the heart of Mexico.
            Perfect for sharing (or indulging solo), these tacos are a celebration of tradition, taste, and the art of good eating.
            Join us and savor the true essence of Mexican culinary excellence, one taco at a time.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .highlights-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }

      .highlight {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }

      .highlight img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }

      .highlight p {
        margin-top: 10px;
      }
    `
  ]
})
export class HomeComponent {

}
