import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Blog } from './blog/blog';
import { ListeProduits } from './liste-produits/liste-produits';
import { Notifications } from './notifications/notifications';
import { Posts } from './posts/posts';
import { Profil } from './profil/profil';
import { Todo } from './todo/todo';
import { PostDetail } from './post-detail/post-detail';
import { Inscription } from './inscription/inscription';
import { Commande } from './commande/commande';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { authGuard } from './auth-guard';
import { PanierNgrx } from './panier-ngrx/panier-ngrx';
import { Compteur } from './compteur/compteur';



export const routes: Routes = [
  { path: '', loadComponent: () => import('./accueil/accueil').then(m => m.Accueil) },
  { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
  { path: 'liste-produits', loadComponent: () => import('./liste-produits/liste-produits').then(m => m.ListeProduits) },
  { path: 'posts', loadComponent: () => import('./posts/posts').then(m => m.Posts) },
  { path: 'posts/:id', loadComponent: () => import('./post-detail/post-detail').then(m => m.PostDetail) },
  { path: 'panier', loadComponent: () => import('./panier-ngrx/panier-ngrx').then(m => m.PanierNgrx) },
  { path: 'inscription', loadComponent: () => import('./inscription/inscription').then(m => m.Inscription) },
  { path: 'commande', loadComponent: () => import('./commande/commande').then(m => m.Commande) },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
  { path: 'admin', loadComponent: () => import('./admin/admin').then(m => m.Admin), canActivate: [authGuard] },
  { path: 'compteur', loadComponent: () => import('./compteur/compteur').then(m => m.Compteur) },
  { path: 'todo', loadComponent: () => import('./todo/todo').then(m => m.Todo) },
  { path: 'profil', loadComponent: () => import('./profil/profil').then(m => m.Profil) },
  { path: 'notifications', loadComponent: () => import('./notifications/notifications').then(m => m.Notifications) },
];
