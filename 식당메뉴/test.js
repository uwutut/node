var fs = require("fs")

fs.readdir("./식당메뉴", function(error,data){
    console.log(data)
})

fs.readFile("./식당메뉴/월", 'utf-8',function(error,data){
    console.log(data)
})