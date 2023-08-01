import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
)};


  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlContacts;
  }

  getAllContacts():Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.apiUrl, this.httpOptions);
  }
  getContactsById(id: number) :Observable<Contacts> {
    return this.http.get<Contacts>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
   updateContacts(id: number, contacts: Contacts):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, contacts, this.httpOptions);
  }

  createContacts(contacts: Contacts): Observable<any> {
    return this.http.post<Contacts>(this.apiUrl, contacts, this.httpOptions);
  }

  delContacts(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
