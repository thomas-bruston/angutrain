import { Component } from '@angular/core';
import { CarteProduit } from '../carte-produit/carte-produit';
import { Panier } from '../panier';

interface IProduit{
  id : number;
  nom : string;
  prix : number;
  disponible : boolean;
}

@Component({
  selector: 'app-liste-produits',
  standalone : true,
  imports: [CarteProduit],
  templateUrl: './liste-produits.html',
  styleUrl: './liste-produits.css',
})

export class ListeProduits {
  produits :IProduit[] = [
    {id : 1, nom : 'Laptop', prix: 1200, disponible : true},
    {id : 2, nom : 'Souris', prix: 25, disponible : false},
    {id : 3, nom : 'Clavier', prix : 80, disponible : true},

  ];

  constructor(private panier : Panier) {}

  onAjout(produit : IProduit):void{
    this.panier.ajouter(produit);
    console.log('Panier : ', this.panier.getArticles())
    console.log ('total:', this.panier.total(), '€')
  }
  getNbArticles() : number{
    return this.panier.total();
  }

}

