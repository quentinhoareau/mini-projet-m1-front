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
    console.log(token);
    
    window.sessionStorage.setItem("token", token);
 
  }

  destroyToken(): void {
    window.sessionStorage.removeItem("token");
  }

  public getToken(): any {
    console.log(window.sessionStorage.getItem("token"));
    
    return window.sessionStorage.getItem("token");
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null && this.getToken() !== undefined ;
  }
}
