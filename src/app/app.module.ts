import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ExchangeComponent } from './exchange/exchange.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutes,
    AppComponent,
    HomeComponent,
    HistoryComponent,
    ExchangeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
