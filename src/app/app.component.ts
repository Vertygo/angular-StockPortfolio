import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Milan works!';
  name = 'Milan';

  changeName()  {
    this.name = (this.name === 'Milan') ? 'Boris' : 'Milan';
  }
}
