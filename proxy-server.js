const express = require('express');
const timeout = require('connect-timeout');
const proxy = require('http-proxy-middleware');
const app = express();

const { HOST = 'http://127.0.0.1:3000', PORT = '4080' } = process.env;

const TIME_OUT = 30 * 1e3;

app.set('port', PORT);

app.use(timeout(TIME_OUT));

app.use((req, res, next) => {
    if(!req.timedout) next();
})


// app.use(proxy('/api/test', { target: HOST }));

// app.use(proxy('/music', { target: HOST }));
// app.use(proxy('/login', { target: HOST }));
// app.use(proxy('/static', { target: HOST }));
// app.use(proxy('/upload', { target: HOST }));

app.use('/', express.static('static'));
app.use('/music', express.static('static'));
app.use('/login', express.static('static'));
app.use('/static',express.static('static'));
app.use('/upload',express.static('static'));
app.use('/agreement',express.static('static'));

app.use('/download', express.static('static/download'));
// app.use(express.static(__dirname + 'static'))

app.use('/pay', express.static('static/wechat'));
app.use('/members', express.static('static/wechat'));

app.get('/app',function(req,res,next){
    res.download(__dirname + '/static/download/assets/唔哩星球-v2.7.1-gionee-release.apk','WuliStar.apk');
});

app.listen(app.get('port'), () => {
    console.log(`server running @${app.get('port')}`);
})