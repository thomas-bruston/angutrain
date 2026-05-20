import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/posts/${id}`);
  }

  getPostsByUser(userId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts?userId=${userId}`);
  }
}