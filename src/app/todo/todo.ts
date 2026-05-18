import { Component } from '@angular/core';

interface ITache{
  id: number;
  titre : string;
  statut : 'active'| 'terminée';
}

@Component({
  selector: 'app-todo',
  standalone : true,
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})


export class Todo {
filtre : 'toutes'| 'active' |'terminée'= 'toutes';


taches : ITache[] = [
  {id : 1, titre : 'apprendre Angular', statut : 'active' },
  {id : 2, titre : 'faire les exercices', statut : 'terminée' },
  {id : 3, titre : 'push sur gitub', statut :'active' },
  {id : 4, titre : 'reviser typescipt', statut : 'terminée' }
];

getTachesFiltrees() : ITache[] {
  if (this.filtre === 'toutes')
    return this.taches;
  return this.taches.filter(t => t.statut === this.filtre);
}

changerFiltre (filtre : 'toutes'|'active'|'terminée') : void {
this.filtre = filtre;
}

}