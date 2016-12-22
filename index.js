var koa = require('koa');
var koaBody = require('koa-body');

var app = koa();

app.use(koaBody({formidable:{uploadDir: __dirname}}));
app.use(function *(){
    console.log("Method: ",this.request.method);
    console.log("Query:\n", this.request.query,"\n");
    console.log("Body:\n",this.request.body);
    console.log('\n==============\n');
});

app.listen(3000);
console.log("Listening port 3000");