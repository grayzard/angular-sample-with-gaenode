# Angular プロジェクト

## 環境構築
```
$ npm i -g @angular/cli
$ ng new source --routing --style=scss
$ cd source
$ ng g universal --client-project=source
$ npm install
$ ng g component components/top-page --module app
$ ng g directive directives/app-shell-render --module app
$ ng g directive directives/app-shell-no-render --module app
$ ng update @angular/cli @angular/core
```

## 開発環境での実行方法
```
$ cd source
$ npm run start
```


## 製品ビルド
```
$ cd source
$ npm run ng build --prod --aot           # クライアント
$ npm run ng run source:server            # サーバー
```

## メモ
- *appShellRender ディレクティブ
  サーバサイドでレンダリングされ、クライアントのレンダリングが行われると、非表示になる。
- *appShellNoRender ディレクティブ
  クライアントサイドでのみレンダリングが行われる。
