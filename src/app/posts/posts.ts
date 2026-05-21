import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

interface IPost{
  id : number,
  userId : number,
  title : string,
  body : string,
}

@Component({
  selector: 'app-posts',
  standalone : true,
  imports: [FormsModule,RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit{
  posts : IPost[] = [];
  postsFiltres : IPost[] = [];
  recherche : string = '';

  constructor(private postService : PostService) {}
  ngOnInit(): void {
    this.postService.getPosts()
    .pipe(map(posts =>posts.slice(0,20)))
    .subscribe(posts =>{
      this.posts= posts;
      this.postsFiltres = posts;
      
    });
  }
  onRecherche() : void{
    this.postsFiltres = this.posts.filter(p =>
      p.title.toLowerCase().includes(this.recherche.toLowerCase())
    );
  }

}
