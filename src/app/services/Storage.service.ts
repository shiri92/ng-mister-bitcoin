import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StorageService {

  constructor() { }

  public loadFromStorage(key: string) {
    var val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  }

  public saveToStorage(key: string, val: object) {
    localStorage[key] = JSON.stringify(val);
  }
}
