'use strict';

// [START app]
const zoneNode      = require('zone.js/dist/zone-node');
const reflectMeta   = require('reflect-metadata');
const express       = require('express');
const bodyParser    = require('body-parser');
const angularCore   = require('@angular/core')
const angularServer = require('@angular/platform-server');
const fs            = require('fs');
const serverMain    = require('./dist/server/main.js');
const app           = express();

// Angularをプロダクションモードに設定
angularCore.enableProdMode();

// リバースプロキシ経由時のアクセス対策
app.set('trust proxy', true);

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Angularのファイル指定
app.get('*.*', express.static(__dirname + '/dist/client', {
  maxAge: '1y'
}));

const indexHtml = fs.readFileSync(__dirname + '/dist/client/index.html', 'utf-8').toString();
app.route('*').get((req, res) => {
  angularServer.renderModuleFactory(serverMain.AppServerModuleNgFactory, {
    document: indexHtml,
    url: req.url
  }).then(html => {
    res.status(200).send(html);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

// Webサーバを起動
const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  console.log('Press Ctrl+C to quit.');
});

// [END app]