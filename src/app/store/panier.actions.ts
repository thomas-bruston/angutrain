import { createAction, props } from '@ngrx/store';

export interface IArticle{
    id : number;
    nom : string;
    prix : number; }

    export const ajouterArticle = createAction(
          '[Panier] Ajouter Article',  
  props<{ article: IArticle }>() 
);

export const supprimerArticle = createAction(
    '[Panier] Supprimer Article',
    props<{ id : number }>()

);

export const viderPanier = createAction(
    '[Panier] Vider Panier')
   

