import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  private apiUrl = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }
  getJokeByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random?category=${category}`);
  }

  getAvailableCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  searchJokes(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}`);
  }
}
