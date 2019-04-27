import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import * as moment from 'moment';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactService } from './services/Contact.service';
import { UserService } from './services/user.service';
import StorageService from './services/storage.service';
import { BitcoinService } from './services/bitcoin.service';
import { GoogleChartComponent } from './cmps/google-chart/google-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    MovesListComponent,
    TransferFundsComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SignupPageComponent,
    StatisticPageComponent,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    MomentModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [
    ContactService,
    UserService,
    StorageService,
    BitcoinService,
    { provide: 'moment', useValue: moment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
