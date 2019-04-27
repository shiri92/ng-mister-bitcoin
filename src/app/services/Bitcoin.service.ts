import { Injectable } from '@angular/core';
import StorageService from './storage.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Chart from '../services/models/Chart';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  marketPriceSubject = new BehaviorSubject<Chart>(null);
  confirmedTransactionsSubject = new BehaviorSubject<Chart>(null);
  constructor(private StorageService: StorageService, private http: HttpClient) { }

  private MARKET_KEY = 'Market';
  private TRANSACTIONS_KEY = 'Transactions';
  private BTC_KEY = 'BTC';

  public getRate(coins: Number): Observable<Number> {
    if (this.StorageService.loadFromStorage(this.BTC_KEY)) {
      return of(this.StorageService.loadFromStorage(this.BTC_KEY))
    } else {
      this.http.get<Number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .subscribe(rate => {
          this.StorageService.saveToStorage(this.BTC_KEY, rate)
          return of(rate)
        })
    }
  }

  public getMarketPrice(): Observable<Chart> {
    let market = this.StorageService.loadFromStorage(this.MARKET_KEY)
    if (market) {
      this.marketPriceSubject.next(market);
      return of(market);
    } else {
      const api = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`;
      this.http.get<Chart>(api).subscribe(res => {
        this.StorageService.saveToStorage(this.MARKET_KEY, res);
        this.marketPriceSubject.next(res);
        return of(res);
      })
    }
  }

  public getConfirmedTransactions(): Observable<Chart> {
    let trasactions = this.StorageService.loadFromStorage(this.TRANSACTIONS_KEY)
    if (trasactions) {
      this.confirmedTransactionsSubject.next(trasactions);
      return of(trasactions);
    } else {
      const api = `https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`;
      this.http.get<Chart>(api).subscribe(res => {
        this.StorageService.saveToStorage(this.TRANSACTIONS_KEY, res);
        this.confirmedTransactionsSubject.next(res);
        return of(res);
      })
    }
  }
}
