const url = require('url')
const Koa = require('koa');
const cors = require('@koa/cors');
const compress = require('koa-compress');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
//const fs = require('node:fs');


var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();

// Security and performance middleware
app.use(helmet());
app.use(compress());
app.use(cors());

// Request parsing middleware
app.use(bodyParser());

///////////////////////////

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

//Root endpoint
router.get('/', (ctx) => {
  ctx.body = {
    message: 'Welcome AOG!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`Koa server running on http://${host}:${port}`);
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



///////////////////////////////////////////////////////////////////
// https://github.com/Rob--W/cors-anywhere/tree/master
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
  originBlacklist: [],
  originWhitelist: [],
  //requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: [
    // 'cookie',
    // 'cookie2',
    // Strip Heroku-specific headers
    // 'x-request-start',
    // 'x-request-id',
    // 'via',
    // 'connect-time',
    // 'total-route-time',

  ],
  // httpProxyOptions: {
  //   // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
  //   xfwd: false,
  // },
}).listen((port+1), host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + (port+1))
});