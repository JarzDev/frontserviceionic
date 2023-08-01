import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servs } from '../interfaces/servs';

@Injectable({
  providedIn: 'root'
})
export class ServsService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
)};


  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlServs;
  }

  
  getAllServs():Observable<Servs[]> {
    return this.http.get<Servs[]>(this.apiUrl, this.httpOptions);
  }
  getServsById(id: number) :Observable<any> {
    return this.http.get<Servs>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
   updateServs(id: number, servs: Servs):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, servs, this.httpOptions);
  }

  createServs(servs: Servs): Observable<void> {
    return this.http.post<void>(this.apiUrl, servs, this.httpOptions);
  }

  delServs(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}