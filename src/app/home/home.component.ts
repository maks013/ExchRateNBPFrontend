import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  start() {

  }
}
