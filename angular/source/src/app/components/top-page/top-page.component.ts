import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  constructor(
          private title: Title,
          private meta: Meta) { }

  ngOnInit() {
    // SEO用メタデータの設定
    this.title.setTitle('タイトル');
    this.meta.addTag({
      name: 'description',
      content: '説明文'
    });

    // SEO Twitterカード用
    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: '@grayzard'});
    this.meta.addTag({name: 'twitter:title', content: 'タイトル'});
    this.meta.addTag({name: 'twitter:description', content: '説明文'});
    this.meta.addTag({name: 'twitter:text:description', content: '説明文'});
    this.meta.addTag({name: 'twitter:image', content: 'イメージのアドレス'});
  }

}
