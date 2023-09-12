import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  articles: Article[]

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'hhtp://angular.io', 1)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean  {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    return false
  }
}
