const express = require('express');
const timeout = require('connect-timeout');
const proxy = require('http-proxy-middleware');
// const Wechat = require('wechat-jssdk');
// const wechatConfig = {
//     wechatRedirectUrl: '',
//     appId: "appid",
//     appSecret: "app_secret",
//     card: true, 
//     payment: true, 
//     merchantId: '', 
//     paymentSandBox: true,
//     paymentKey: '', 
//     paymentCertificatePfx: fs.readFileSync(path.join(process.cwd(), 'cert/apiclient_cert.p12')),
//     paymentNotifyUrl: `http://your.domain.com/api/wechat/payment/`,
// }
// const wx = new Wechat(wechatConfig);
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

app.use(express.static('wechat'));
app.use('/pay', express.static('wechat'));
app.use('/members', express.static('wechat'));
router.get('/verify', (req, res, next) => {
    // res.send('fsdfsfsfs')
    console.log('req.query');
    return req.query.echostr
})

app.use(express.static('download'))
app.use('/download', express.static('download'));
app.get('/app',function(req,res,next){
    res.download(__dirname + '/static/download/assets/唔哩星球-v2.7.1-gionee-release.apk','WuliStar.apk');
});

app.listen(app.get('port'), () => {
    console.log(`server running @${app.get('port')}`);
})