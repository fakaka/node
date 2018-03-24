var Koa = require("Koa");
var app = Koa();

app.use(function* () {
    

    this.body = "Hello Koa";
});

app.listen(3000);

console.log("Listen port : 3000 ");