const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');

var app = express();

//app.use(express.static(path.join(__dirname, './static')));

app.all('/*', function(req, res){
    //console.log("请求路径："+req.url);

    if(req.url=='/mukewang/'){
        fs.createReadStream('./mukewang/index.html').pipe(res);
    }

    else{

        // 如果是css、js、图片资源
        var project = req.url.split('/')[req.url.split('/').length-3];
        var filename = req.url.split('/')[req.url.split('/').length-1];
        var suffix = req.url.split('.')[req.url.split('.').length-1];
        // console.log("项目名：", project);
        // console.log("文件名：", filename);
        console.log('类型' ,suffix);
        if(suffix=='js'){
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            fs.createReadStream(path.join(__dirname, 'static', project,'js',filename)).pipe(res);
        }else if(suffix=='css'){
            res.writeHead(200, {'Content-Type': 'text/css'});
            fs.createReadStream(path.join(__dirname, 'static', project,'css',filename)).pipe(res);
        }else if(suffix=='jpg'||suffix=='png') {            
            res.writeHead(200, {'Content-Type': 'image/'+suffix});
            fs.createReadStream(path.join(__dirname, 'static', project,'images',filename)).pipe(res);

        }else {
            console.log('not match');
        }

    }

    
});


var server = app.listen(3000,'localhost');