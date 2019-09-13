import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessData: string[] = ['accessToken', 'created', 'expiration', 'authenticated'];
  private urlAuth = `${environment.ApiConfig.urlAuth}`;


  @Output() showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  // auth(user: User): Observable<any> {
  //   return this.http.post(this.urlAuth, user)
  // }

  isAuthenticated(): boolean {
    var authenticated = localStorage.getItem('authenticated');
    if (authenticated == null) {
      this.showMenuEmitter.emit(false);
      return false;
    }
    this.showMenuEmitter.emit(true);
    return true;
  }

  setLocalStorage(objToSet: any) {
    for (let index = 0; index < this.accessData.length; index++) {
      localStorage.setItem(this.accessData[index], objToSet[this.accessData[index]]);
    }
  }


  getToken() {
    return localStorage.getItem('accessToken');
  }

  // logOut() {
  //   localStorage.removeItem('authenticated');
  //   this.isAuthenticated();
  // }
  logOut() {
    var valueConfirm = confirm('Deseja realmente sair?');
    if (valueConfirm) {
      localStorage.removeItem('authenticated');
      this.router.navigate(['/']);
      this.isAuthenticated();      
    }    
  }
}
