import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filterArray,calculerTotal,findById,Commande } from './dashboard-utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angutrain');


  constructor() {
    const commandes: Commande[] = [
      { id: 1, client: "Alice", montant: 150, statut: "livrée" },
      { id: 2, client: "Bob", montant: 80, statut: "en_attente" },
      { id: 3, client: "Carol", montant: 320, statut: "expédiée" },
      { id: 4, client: "David", montant: 50, statut: "annulée" },
    ];

    console.log(filterArray(commandes, c => c.statut === "en_attente"));
    console.log(calculerTotal(filterArray(commandes, c => c.statut === "livrée")));
    console.log(findById(commandes, 3));
    console.log(findById(commandes, 99));
  }
}
