import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListHouseService {

  constructor(private http: HttpClient) {}

  getHouses() {
    return this.http
      .get(environment.apiUrl + `house`, {
        // headers: this.reqHeader,
      })
      .pipe(catchError(this.handleError));
  }

  getDetailHouse(id: string) {
    return this.http
      .get(environment.apiUrl + `house/${id}`, {
        // headers: this.reqHeader,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
