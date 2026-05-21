import { Component,OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface IPost{
  id : number ;
  userId : number ;
  body : string ;
  title : string;

}

@Component({
  selector: 'app-post-detail',
  standalone : true,
  imports: [RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})

export class PostDetail implements OnInit{
  post : IPost | null = null

  constructor(
    private service : PostService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id')
    if (id) {
      this.service.getPostById(Number(id)).subscribe(post =>{
        this.post = post; })
       
    }
    }
  }




