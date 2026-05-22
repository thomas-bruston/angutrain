import { createReducer, on } from '@ngrx/store';
import { ajouterArticle, supprimerArticle, viderPanier, IArticle } from './panier.actions';

export interface PanierState {
  articles: IArticle[];
}

export const initialState: PanierState = {
  articles: []
};

export const panierReducer = createReducer(
  initialState,

  // Quand action "ajouter" → on ajoute l'article au tableau
  on(ajouterArticle, (state, { article }) => ({
    ...state,
    articles: [...state.articles, article]
  })),

  // Quand action "supprimer" → on filtre le tableau
  on(supprimerArticle, (state, { id }) => ({
    ...state,
    articles: state.articles.filter(a => a.id !== id)
  })),

  // Quand action "vider" → tableau vide
  on(viderPanier, (state) => ({
    ...state,
    articles: []
  }))
);
