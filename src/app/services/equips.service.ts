import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equips } from '../interfaces/equips';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipsService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
)};

  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlEquips;
  }
  
  getAllEquips():Observable<Equips[]> {
    return this.http.get<Equips[]>(this.apiUrl, this.httpOptions);
  }
  getEquipsById(id: number) :Observable<Equips> {
    return this.http.get<Equips>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
   updateEquips(id: number, equips: Equips):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, equips, this.httpOptions);
  }

  createEquips(equips: Equips): Observable<any> {
    return this.http.post<Equips>(this.apiUrl, equips, this.httpOptions);
  }

  delEquips(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
