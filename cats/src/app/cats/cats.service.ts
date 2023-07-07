import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CatService {
  private serverUrl = 'api/cats';

  constructor(private http: HttpClient) {}

  getCats() {
    
  }
}