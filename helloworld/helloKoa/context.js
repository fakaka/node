var Koa = require("Koa");
var app = Koa();

app.use(function* () {
    // this.throw(404, "Not Found ");
    // console.log(this.request);
    // console.log(this.req);
    // console.log(this.cookies.get("name"));
    this.body = "Hello Koa";
});

app.listen(3000);

console.log("Listen port : 3000 ");