import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';

interface IPost{
  id : number,
  userId : number,
  title : string,
  body : string,
}

@Component({
  selector: 'app-posts',
  standalone : true,
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit{
  posts : IPost[] = [];

  constructor(private postService : PostService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts =>{
      this.posts= posts;
      console.log('Post recus : ' , this.posts);
    });

    
  }

}
