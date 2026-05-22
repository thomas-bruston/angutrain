import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PanierState } from './panier.reducer';

export const selectPanierState = createFeatureSelector<PanierState>('panier');


export const selectArticles = createSelector (
    selectPanierState,
    (state) =>state.articles
);

export const selectTotal = createSelector (
    selectPanierState,
    (state) => state.articles.reduce((Sum,a) => Sum + a.prix, 0)

);


