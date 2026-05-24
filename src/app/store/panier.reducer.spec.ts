import { panierReducer, initialState } from './panier.reducer';
import { ajouterArticle, supprimerArticle, viderPanier } from './panier.actions';

describe('PanierReducer', () => {

  it('doit retourner l\'état initial', () => {
    const state = panierReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('doit ajouter un article', () => {
    const article = { id: 1, nom: 'Laptop', prix: 1200 };
    const action = ajouterArticle({ article });
    const state = panierReducer(initialState, action);
    expect(state.articles.length).toBe(1);
    expect(state.articles[0].nom).toBe('Laptop');
  });

  it('doit supprimer un article', () => {
    const stateAvec = {
      articles: [{ id: 1, nom: 'Laptop', prix: 1200 }]
    };
    const action = supprimerArticle({ id: 1 });
    const state = panierReducer(stateAvec, action);
    expect(state.articles.length).toBe(0);
  });

  it('doit vider le panier', () => {
    const stateAvec = {
      articles: [
        { id: 1, nom: 'Laptop', prix: 1200 },
        { id: 2, nom: 'Souris', prix: 25 }
      ]
    };
    const action = viderPanier();
    const state = panierReducer(stateAvec, action);
    expect(state.articles.length).toBe(0);
  });
});