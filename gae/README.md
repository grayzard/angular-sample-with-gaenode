# GAE/Node.js プロジェクト

## 環境構築
```
$ mkdir source
$ cd source
$ npm init
$ npm isntall -s express
$ npm install -s body-parser
$ npm install -s zone.js
$ npm install -s reflect-metadata
$ npm install -s @angular/core
$ npm install -s rxjs
$ npm install -s @angular/platform-server
$ npm install -s @angular/platform-browser
$ npm install -s @angular/common
$ npm install -s @angular/http
$ npm install -s @angular/compiler
$ npm install -s @angular/animations
$ npm install -s @angular/platform-browser-dynamic
$ npm install -s @angular/router
$ npm install
```

## フォルダ構成

```
 gae
 ├ source
 │ ├ dist                   Angularクライアントアプリの出力先(Git管理外)
 │ ├ node_modules           node module用フォルダ(Git管理外)
 │ ├ .gcloudignore          GAEにアップロードしないファイルの設定
 │ ├ app.js                 アプリケーション
 │ ├ app.yaml               GAEの設定
 │ ├ package.json           npmの管理ファイル
 │ └ package-lock.json      npmの管理ファイル
 ├─ .gitignore              Git管理除外設定
 └─ README.md               このファイル
```

## ローカル環境での実行

``` command line
cd source
npm start
```

## GAEへのデプロイ

``` Google Cloud SDK Shell
gcloud app deploy app.yaml --project ＜プロジェクト名＞ --no-promote -v ＜バージョン＞
```