import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  constructor(private http: HttpClient) { }
  
  getStatistics() {
    const header: HttpHeaders = new HttpHeaders().set('X-RapidAPI-Key', '5901f12954msh31249ad9794a53cp1b8ddfjsn5663c8056452');
    return this.http.get('https://api-football-v1.p.rapidapi.com/v2/statistics/524/40', {headers: header})
      .pipe(map((data) => {
        return data['api']['statistics'];
      }));
  }
}
