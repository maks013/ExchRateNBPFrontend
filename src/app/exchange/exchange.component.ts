import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.css'
})
export class ExchangeComponent {
  exchange() {
  }
}
