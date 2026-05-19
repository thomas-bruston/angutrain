import { Injectable } from '@angular/core';

interface IArticle{
  id: number;
  nom : string;
  prix : number;
}

@Injectable({
  providedIn: 'root',
})
export class Panier {
  private articles : IArticle[] = [];

  ajouter(article : IArticle) : void{
    this.articles.push(article);}

  supprimer(id: number) : void{
    this.articles = this.articles.filter(a => a.id !== id)
  }

    getArticles() : IArticle[]{
      return this.articles;
    }
    total(): number{
      return this.articles.reduce((sum,a)=> sum + a.prix, 0);
    }
  }

