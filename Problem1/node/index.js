const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
   // const queryObject = url.parse(req.url, true).query;
   // console.log(queryObject.obj);

   // ここに処理を記述してください。
   const queryObject = {
      "obj": [
         { "num": 4, "text": "fizz" },
         { "num": 7, "text": "buzz" },
         { "num": 8, "text": "hoge" },
         { "num": 15, "text": "huga" }
      ]
   };
   ans = "answer";

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Request-Method', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
   res.setHeader('Access-Control-Allow-Headers', '*');
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(ans);
   res.end();
});
server.listen(8080); 
