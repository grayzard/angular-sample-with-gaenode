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
$ npm install --save-dev @types/express
$ npm install --save-dev typescript ts-loader
$ npm install --save-dev tslint tslint-loader tslint-config-airbnb
$ npm install --save-dev webpack webpack-cli
$ npm install --save-dev webpack-node-externals   #Warning対策
$ npm install
```

## フォルダ構成
```
 gae
 ├ source
 │ ├ dist                       Angularクライアントアプリの出力先(Git管理外)
 │ ├ node_modules               node module用フォルダ(Git管理外)
 │ ├ .gcloudignore              GAEにアップロードしないファイルの設定
 │ ├ app.js                     サーバーアプリケーション(実行用)
 │ ├ app.ts                     サーバーアプリケーション(TypeScript)
 │ ├ app.yaml                   GAEの設定
 │ ├ package-lock.json          npmの管理ファイル
 │ ├ package.json               npmの管理ファイル
 │ ├ tsconfig.dev.json          TypeScriptの設定(開発用)
 │ ├ tsconfig.prod.json         TypeScriptの設定(製品用)
 │ ├ tslint.json                tslintの設定
 │ ├ webpack.config.dev.js      webpackの設定(開発用)
 │ └ webpack.config.prod.js     webpackの設定(製品用)
 ├─ .gitignore                  Git管理除外設定
 └─ README.md                   このファイル
```

## ビルド方法
```
npm run build:dev           # 開発ビルド
npm run build:prod          # 製品ビルド
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