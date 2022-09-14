import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTestJSON(page? : number) : Observable<any>{
    const URL = 'https://BASE_ENDPOINT' + page
    return this.http.get(URL)
  }
}
