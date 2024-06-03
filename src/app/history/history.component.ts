import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ExchangeRateService } from '../service/exchange-rate.service';
import { HttpClientModule } from '@angular/common/http';

interface Request {
  currency: string;
  name: string;
  date: string;
  value: number;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    DatePipe,
    NavbarComponent,
    FooterComponent,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterViewInit {
  exchangeRates: Request[] = [];
  displayedColumns: string[] = ['name', 'currency', 'date', 'value'];
  dataSource = new MatTableDataSource<Request>(this.exchangeRates);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.fetchExchangeRates();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  fetchExchangeRates(): void {
    this.exchangeRateService.getRequests().subscribe((data: Request[]) => {
      this.exchangeRates = data;
      this.dataSource.data = this.exchangeRates;
    });
  }
}
