import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { bookResponse } from 'src/app/shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {
  }
  getBooks(userID: number) {
    return this.http.get<bookResponse[]>(`${environment.apiUrl}/user/bookmarks`, {headers: {'Authorization': `Bearer ${environment.savedToken[userID - 1]}`}});
  }
}
