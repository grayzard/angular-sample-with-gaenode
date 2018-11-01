'use strict';

// [START app]
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

// リバースプロキシ経由時のアクセス対策
app.set('trust proxy', true);

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Angularのファイル指定
app.use(express.static(__dirname + '/dist/client'));

// Webサーバを起動
const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  console.log('Press Ctrl+C to quit.');
});

// [END app]