
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent   } from './login/login-form/login-form.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleFormItemComponent } from './article/article-form-item/article-form-item.component';

const routes: Routes = [
  {
    path     : '',
    component: LoginFormComponent,
    pathMatch: 'full'
  },
  {
    path     : 'home',
    component: ArticleListComponent
  },
  {
    path     : 'new',
    component: ArticleFormItemComponent
  },
  {
    path     : 'edit/:id',
    component: ArticleFormItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
