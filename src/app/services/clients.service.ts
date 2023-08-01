import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {




  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
)};


  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlClient;
  }

  getAllClients():Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl, this.httpOptions);
  }
  getClientById(id: number) :Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`,  this.httpOptions);
  }
   updateClient(id: number, client: Client):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, client,  this.httpOptions);
  }

  createClient(client: Client): Observable<void> {
    return this.http.post<void>(this.apiUrl, client,  this.httpOptions);
  }

  delClient(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
