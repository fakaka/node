var Koa = require("Koa");
var KeyGrip = require("KeyGrip");
var app = Koa();

app.keys = ['im a newer secret', 'i like hairpin'];
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

app.use(function* () {
    this.cookies.set('name', 'mj', { signed: true });
    this.body = "Hello Koa";
});

app.listen(3000);
console.log("Listen port : 3000 ");
