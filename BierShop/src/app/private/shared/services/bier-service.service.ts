import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Bier } from 'src/app/shared/models/bier';
import { Observable } from 'rxjs';
import { BierParser } from '../parser/bier-parser';
import { map } from 'rxjs/operators';
// import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class BierServiceService {

  private urlBase = `${environment.ApiConfig.urlBase}`;

  constructor(private http: HttpClient) { }

  addBier(bier: Bier): Observable<any> {
    return this.http.post(this.urlBase + '/add', bier);
  }

  getAllBier(): Observable<any> {
    return this.http.get(this.urlBase + '/listAll')
  }

  getAllGroups(): Observable<any> {
    return this.http.get(this.urlBase + '/getGroup')
  }

  getByPart(param: string): Observable<any> {
    return this.http.get(this.urlBase + '/getByPartOfName?param=' + `${param}`)
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.urlBase + '/getById?id=' + `${id}`)
  }

  updateBier(bier: Bier): Observable<any> {
    return this.http.put(this.urlBase + '/update', bier);
  }

  removerBier(id: number): Observable<any> {
    return this.http.delete(this.urlBase + '/remove?id=' + `${id}`)
  }

  uploadImage(img: FormData, path: string): Observable<any> {
    return  this.http.put(this.urlBase + '/upload?path=' + `${path}`, img);
  }

  uploadRemoveImage(img: FormData): Observable<any> {
    return  this.http.post(this.urlBase + '/removeImage', img);
  }

}
