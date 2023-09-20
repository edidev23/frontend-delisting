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
      .get(environment.apiUrl + `get_list.php`, {
        // headers: this.reqHeader,
      })
      .pipe(catchError(this.handleError));
  }

  getDetailHouse(slug: string) {
    return this.http
      .get(environment.apiUrl + `get_list.php?slug=${slug}`, {
        // headers: this.reqHeader,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
