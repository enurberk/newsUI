import { Injectable } from '@angular/core';
import { AddNewsletter } from '../models/add-newsletter.model';
import { Observable } from 'rxjs';
import { Newsletter } from '../models/newsletter.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  createNewsletter(data: AddNewsletter): Observable<Newsletter>{
    return this.http.post<Newsletter>(`${environment.apiBaseUrl}/api/newsletter`, data);
  }

  getAllNewsletter(): Observable<Newsletter[]>{
    return this.http.get<Newsletter[]>(`${environment.apiBaseUrl}/api/newsletter`);
  }
}
