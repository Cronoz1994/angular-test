
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../shared/models/article';

@Component({
  selector: 'at-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.select.emit(this.article);
  }

}
