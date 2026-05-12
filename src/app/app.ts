import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUtilisateur,Role,hasAccess,getUsersByRole } from './auth-utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angutrain');


  constructor() {
   const users: IUtilisateur[] = [
  { id: 1, nom: "Alice", email: "alice@mail.com", role: Role.ADMIN, actif: true },
  { id: 2, nom: "Bob", email: "bob@mail.com", role: Role.USER, actif: true },
  { id: 3, nom: "Carol", email: "carol@mail.com", role: Role.MODERATEUR, actif: false },
];

console.log(hasAccess(users[0], Role.ADMIN));   
console.log(hasAccess(users[1], Role.ADMIN));    
console.log(getUsersByRole(users, Role.USER));    
  }
}
