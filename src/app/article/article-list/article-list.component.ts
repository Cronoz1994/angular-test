
import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ArticleService    } from '../../shared/services/article.service';
import { Article           } from '../../shared/models/article';

@Component({
  selector: 'at-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe((data) => {
      console.log('data', data);
      this.articles = data;
    });
  }

  onSelect(event: Article): void {
    this.router.navigate(['edit', event.id]);
  }

  redirect(): void {
    this.router.navigate(['new']);
  }

}
