import { Component,Input,Output,EventEmitter, input } from '@angular/core';
import { IArticle } from '../article-service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
})
export class ArticleCard {
  @Input() article! : IArticle;
  @Output() voirDetail = new EventEmitter <IArticle>()

  voir() : void{
    this.voirDetail.emit(this.article)
  }

}
