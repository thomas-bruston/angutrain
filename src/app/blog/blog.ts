import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleService,IArticle } from '../article-service';
import { ArticleCard } from '../article-card/article-card';
import { map } from 'rxjs';


@Component({
  selector: 'app-blog',
  standalone : true,
  imports: [FormsModule,ArticleCard,],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit{
articles: IArticle[] = [];
articlesFiltres: IArticle[] = [];
articleSelectionne : IArticle | null=null;
recherche : string = '';

constructor(private articleService : ArticleService){}

ngOnInit(): void {
  this.articleService.getArticles()
  .pipe(
    map(articles => articles.slice(0,20))
  )

  .subscribe(articles =>{
    this.articles = articles;
    this.articlesFiltres = articles;
  });
}

onRecherche() : void{
  this.articlesFiltres = this.articles.filter(a =>
    a.title.toLowerCase().includes(this.recherche.toLowerCase())
  );
}

onVoirDetail(article: IArticle) : void{
  this.articleSelectionne = article;
}

fermerDetail() : void{
  this.articleSelectionne = null;
}

}
