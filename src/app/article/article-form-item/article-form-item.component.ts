
import { Component, OnInit } from '@angular/core';
import { Article           } from '../../shared/models/article';
import { ActivatedRoute    } from '@angular/router';
import { ArticleService    } from '../../shared/services/article.service';

@Component({
  selector: 'at-article-form-item',
  templateUrl: './article-form-item.component.html',
  styleUrls: ['./article-form-item.component.css']
})
export class ArticleFormItemComponent implements OnInit {
  article: Article = {};

  constructor(private activatedRoute: ActivatedRoute, private articleService :ArticleService) { }

  ngOnInit() {
    this.activatedRoute.params
   .subscribe(params => {
      console.log('params', params);

      this.articleService.getArticle(params.id)
      .subscribe((article: Article) => {
         this.article = article;
      });
    });
  }

  onSubmit() {
    this.articleService.updateArticle(this.article)
    .subscribe((result) => {
      console.log('update article', this.article);
    });
  }

  // newArticle() {
  //   this.articleService.newArticle(this.article);
  // }

}
