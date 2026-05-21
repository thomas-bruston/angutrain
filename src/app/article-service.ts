import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IArticle{
    id : number ;
    userId : number;
    title : string;
    body : string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
   private apiUrl = 'https://jsonplaceholder.typicode.com';

   constructor ( private http : HttpClient ){}

   getArticles() : Observable<IArticle[]> {
    return this.http.get<IArticle[]>(`${this.apiUrl}/posts`)
   }

   getArticleById (id: number) : Observable<IArticle> {
    return this.http.get<IArticle>(`${this.apiUrl}/posts/${id}`)

   }
   } 
  

  
  

