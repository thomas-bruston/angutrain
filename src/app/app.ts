import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost,IUser,getPosts,getPostsByUser,getUserById } from './api-client';
import { Compteur } from "./compteur/compteur";
import { Todo } from './todo/todo';
import { ListeProduits } from "./liste-produits/liste-produits";
import { Profil } from './profil/profil';
import { Posts } from './posts/posts';
import { Notifications } from './notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compteur, Todo, ListeProduits,Profil,Posts,Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titre ='Mon porte folio Angular'
  description = 'devellopeur Angular en formation'
  annee = new Date().getFullYear();
} 
