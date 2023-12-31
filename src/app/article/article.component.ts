import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article

  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    )
  }

  voteUp(): boolean {
    this.article.voteUp()
    return false
  }

  voteDown(): boolean {
    this.article.voteDown()
    return false
  }

  domain() {
    try {
      const domainAndPath: string = this.article.link.split('//')[1]
      return domainAndPath.split('/')[0]
    } catch (err) {
      return null
    }
  }

  ngOnInit() {

  }
}
