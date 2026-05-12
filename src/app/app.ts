import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost,IUser,getPosts,getPostsByUser,getUserById } from './api-client';
import { Compteur } from "./compteur/compteur";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compteur],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titre ='Mon porte folio Angular'
  description = 'devellopeur Angular en formation'
  annee = new Date().getFullYear();
} 
