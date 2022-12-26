import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: any): void {    
    window.sessionStorage.setItem("token", token);
 
  }

  destroyToken(): void {
    window.sessionStorage.removeItem("token");
  }

  public getToken(): any {    
    return window.sessionStorage.getItem("token");
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null && this.getToken() !== undefined ;
  }
}
