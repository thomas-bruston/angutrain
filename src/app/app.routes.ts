import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Blog } from './blog/blog';
import { ListeProduits } from './liste-produits/liste-produits';
import { Notifications } from './notifications/notifications';
import { Posts } from './posts/posts';
import { Profil } from './profil/profil';
import { Todo } from './todo/todo';
import { PostDetail } from './post-detail/post-detail';



export const routes: Routes = [
    {path: '' , component:Accueil},
    {path: 'blog' , component:Blog},
    {path: 'liste-produits' , component:ListeProduits},
    {path:'notifications' , component:Notifications},
    {path: 'posts' , component:Posts},
    {path: 'Profil' , component:Profil},
    {path:'todo' , component:Todo},
    {path:'posts/:id' , component:PostDetail}
];
