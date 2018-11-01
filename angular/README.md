# Angular プロジェクト

## 環境構築
```
$ npm i -g @angular/cli
$ ng new source --routing --style=scss
$ cd source
$ ng g universal --client-project=source
$ npm install
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