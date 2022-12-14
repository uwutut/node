const http = require('http')
const fs = require('fs')
const url = require('url')
function templates(title, data1){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>기본 페이지</title>
    </head>
    <body>
        <h1>${title}</h1>
        <ul>
            <li><a href="/?id=html">html</a></li>
            <li><a href="/?id=css">css</a></li>
        </ul>
        <p>${data1}</p>
    </body>
    </html>
    `
}

var app = http.createServer(function(request, response){
    var path = url.parse(request.url, true).path
    if(request.url != '/favicon.ico'){
        var title = url.parse(request.url, true).query
        var title = title.id
        if(path === "/"){
            title = "home"
            data1 = "welome"
            console.log(path)
            response.writeHead(200);
            response.end(templates(title,data1));
        }

        else{
            var data1 = fs.readFileSync(`./data/${title}`,'utf-8');
            response.writeHead(200);
            response.end(templates(title,data1))
        }
        
    }
})

app.listen(80)