import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgForOf } from "@angular/common";
import { ExchangeRateService } from '../service/exchange-rate.service';
import {FormsModule} from "@angular/forms"; // Ensure this path is correct

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent {
  currencies: string[] = [
    'THB', 'USD', 'AUD', 'HKD', 'CAD', 'NZD', 'SGD',
    'EUR', 'HUF', 'CHF', 'GBP', 'UAH', 'JPY', 'CZK',
    'DKK', 'ISK', 'NOK', 'SEK', 'RON', 'BGN', 'TRY',
    'ILS', 'CLP', 'PHP', 'MXN', 'ZAR', 'BRL', 'MYR',
    'IDR', 'INR', 'KRW', 'CNY', 'XDR'
  ];
  selectedCurrency: string = 'USD';
  name: string = '';
  currentRate: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  checkRate() {
    const requestData = {
      currency: this.selectedCurrency,
      name: this.name
    };

    this.exchangeRateService.getCurrentCurrencyValue(requestData).subscribe(response => {
      this.currentRate = response.value;
    });
  }
}
