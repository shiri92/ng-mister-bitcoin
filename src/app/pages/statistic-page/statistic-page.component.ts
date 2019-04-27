import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import Chart from '../../services/models/Chart';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketPrice: Chart;
  transactions: Chart;

  ngOnInit() {
    this.bitcoinService.marketPriceSubject.subscribe(res => this.marketPrice = res);
    this.bitcoinService.confirmedTransactionsSubject.subscribe(res => this.transactions = res);
    this.bitcoinService.getMarketPrice();
    this.bitcoinService.getConfirmedTransactions();
  }
}
