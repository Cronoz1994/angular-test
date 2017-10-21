
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers    } from '@angular/http';
import { Article    } from '../models/article';
import { Observable } from 'rxjs/Observable';

const ARTICLES = 'http://localhost:3000/posts';


@Injectable()
export class ArticleService {
  articles: Article;
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    return this.http.get(`${ARTICLES}`);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`${ARTICLES}/${id}`);
  }

  newArticle(newArticle: Article): void {
     return //this.http.post(ARTICLES, article, {});
  }

  updateArticle(article: Article): Observable<any> {
    return this.http.put(`${ARTICLES}/${article.id}`, article, {});
  }

  // getImg(id): Observable<any> {
  //   return `${PICTURE_URL}${posterPath}`;
  // }

  // getDefaultPictureURL(): string {
  //   return DEFAULT_PICTURE_URL;
  // }

}
