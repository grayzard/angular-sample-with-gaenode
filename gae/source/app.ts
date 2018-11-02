'use strict';

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { readFileSync } from 'fs';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const { AppServerModuleNgFactory } = require('./dist/server/main.js');
const app = express();

// Angularをプロダクションモードに設定
enableProdMode();

// リバースプロキシ経由時のアクセス対策
app.set('trust proxy', true);

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Angularのファイル指定
app.get('*.*', express.static('./dist/client', {
  // maxAge: '1y',
}));

const indexHtml = readFileSync('./dist/client/index.html', 'utf-8').toString();
app.route('*').get((req, res) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: indexHtml,
    url: req.url,
  }).then((html) => {
    res.status(200).send(html);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// Webサーバを起動
const PORT: string | number = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Example app listening at http://localhost:%s', PORT);
  console.log('Press Ctrl+C to quit.');
});

export default app;
