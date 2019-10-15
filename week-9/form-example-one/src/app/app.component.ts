import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alternator = 129.99;
  battery = 22.33;
  tire = 399.99;
  brake = 599.99;
  timing = 19.99;
  title = 'app';

  onSubmit(formData) {
    alert('See the browser Console...');

    if (formData.checkGroup.alternator) {
      console.log('Alternator cost: ' + this.alternator);
    }

    if (formData.checkGroup.battery) {
      console.log('Battery cost: ' + this.battery);
    }

    if (formData.checkGroup.tire) {
      console.log('Tire cost: ' + this.tire);
    }

    if (formData.checkGroup.brake) {
      console.log('Brake cost: ' + this.brake);
    }

    if (formData.checkGroup.timing) {
      console.log('Timing belt cost: ' + this.timing);
    }

    console.log('Parts costs: ' + formData.parts);
    console.log('Labor costs: ' + formData.labor);
  }
}
