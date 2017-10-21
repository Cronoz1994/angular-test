
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { HttpClientModule         } from '@angular/common/http';
import { FormsModule              } from '@angular/forms';
import { ArticleListComponent     } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { ArticleService           } from '../shared/services/article.service';
import { ArticleFormItemComponent } from './article-form-item/article-form-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ArticleListComponent, ArticleListItemComponent, ArticleFormItemComponent],
  providers   : [ArticleService]
})
export class ArticleModule { }
