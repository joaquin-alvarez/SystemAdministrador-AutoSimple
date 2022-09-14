import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  TestRecived : String

  constructor(private http: HttpClient) { }

  getTestJSON() : Observable<any>{
    const URL = 'https://rickandmortyapi.com/api/character?=page'
    return this.http.get(URL)
  }
}
