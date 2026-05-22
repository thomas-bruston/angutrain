import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IArticle, ajouterArticle, supprimerArticle, viderPanier } from '../store/panier.actions';
import { selectArticles, selectTotal } from '../store/panier.selectors';

@Component({
  selector: 'app-panier-ngrx',
  standalone : true,
  imports: [AsyncPipe],
  templateUrl: './panier-ngrx.html',
  styleUrl: './panier-ngrx.css',
})
export class PanierNgrx {
  articles$ : Observable <IArticle[]>;
  total$ : Observable <number>;
 
    produits: IArticle[] = [
    { id: 1, nom: 'Laptop', prix: 1200 },
    { id: 2, nom: 'Souris', prix: 25 },
    { id: 3, nom: 'Clavier', prix: 80 },
  ];

  constructor(private store : Store){
    this.articles$ = this.store.select(selectArticles);
    this.total$ = this.store.select(selectTotal);}


    ajouter(article: IArticle) : void {
      this.store.dispatch(ajouterArticle({ article }));

    }

    supprimer( id : number) : void {
      this.store.dispatch(supprimerArticle({id}));
    }

    vider() : void{
      this.store.dispatch(viderPanier());
    }
  }


