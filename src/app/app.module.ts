//import { AppRoutes } from './../../../stocks/src/app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CurrencyPipe, PercentPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { DelayDirective } from './directives/delay.directive';
import { CardTypeDirective } from './directives/card-type.directive';
import { ChangePipe } from './pipes/change.pipe';
import { ChangeDetectorPipe } from './pipes/change-detector.pipe';
import { NewsPipe } from './pipes/news.pipe';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageComponent,
    SummaryComponent,
    CardHoverDirective,
    DelayDirective,
    CardTypeDirective,
    ChangePipe,
    ChangeDetectorPipe,
    NewsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [
    StocksService,
    CurrencyPipe,
    PercentPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
