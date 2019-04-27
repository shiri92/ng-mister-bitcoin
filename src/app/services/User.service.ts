import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import StorageService from './storage.service';
import User from './models/User';
import Contact from './models/Contact';
import Move from './models/Move';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new BehaviorSubject<User>(null);
  constructor(private StorageService: StorageService) {
    this.getUser();
  }

  USER_KEY = 'User';

  public getUser(): Observable<User> {
    let user = this.StorageService.loadFromStorage(this.USER_KEY);
    this.userSubject.next(user);
    return of(user);
  }

  public signUp(userName: string): Observable<User> {
    let user = new User(userName);
    this.StorageService.saveToStorage(this.USER_KEY, user);
    this.userSubject.next(user);
    return of(user);
  }

  public updateUser(user: User) {
    localStorage.removeItem(this.USER_KEY);
    this.StorageService.saveToStorage(this.USER_KEY, user);
    this.userSubject.next(user);
  }


  public addMove(contact: Contact, amount: number) {
    let user = this.StorageService.loadFromStorage(this.USER_KEY);
    user.moves.push(new Move(contact.name, amount));
    this.StorageService.saveToStorage(this.USER_KEY, user);
    this.userSubject.next(user);
  }

}
