import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPost,IUser,getPosts,getPostsByUser,getUserById } from './api-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angutrain');


  constructor() {
   getPosts().then (posts=> console.log(posts))
   getUserById(1) .then (userId=>console.log (userId))
   getPostsByUser(1).then (posts=>console.log(posts))
  }
}
