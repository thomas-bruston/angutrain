import { TestBed } from '@angular/core/testing';

import { Panier } from './panier';

describe('Panier', () => {
  let service: Panier;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panier);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('doit ajouter un article',() =>{
    service.ajouter({id : 1, nom:'Laptop', prix : 1200});
    expect(service.getArticles().length).toBe(1)

  })
 it('doit supprimer un article', () => {
    service.ajouter({ id: 1, nom: 'Laptop', prix: 1200 });
    service.supprimer(1);
    expect(service.getArticles().length).toBe(0);
  });

  it('doit calculer le total', () => {
    service.ajouter({ id: 1, nom: 'Laptop', prix: 1200 });
    service.ajouter({ id: 2, nom: 'Souris', prix: 25 });
    expect(service.total()).toBe(1225);
  });

});
