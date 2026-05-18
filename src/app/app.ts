import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost,IUser,getPosts,getPostsByUser,getUserById } from './api-client';
import { Compteur } from "./compteur/compteur";
import { Todo } from './todo/todo';
import { ListeProduits } from "./liste-produits/liste-produits";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compteur, Todo, ListeProduits],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titre ='Mon porte folio Angular'
  description = 'devellopeur Angular en formation'
  annee = new Date().getFullYear();
} 
