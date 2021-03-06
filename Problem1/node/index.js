const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
   // const queryObject = url.parse(req.url, true).query;
   // console.log(queryObject.obj);

   // ここに処理を記述してください。
   const queryObject = {
      "obj": [
         { "num": 3, "text": "Fizz" },
         { "num": 5, "text": "Buzz" }
      ]
   };

   const numToFizzBuzz = (n) => {
      const FizzBuzzArray = [];
      for (const pattern of queryObject.obj) {
         if ( n % pattern.num == 0) {
            FizzBuzzArray.push(pattern.text);
         }
      }
      if (FizzBuzzArray.length === 0) {
         FizzBuzzArray.push(String(n));
      }
      return FizzBuzzArray.join(' ');
   };

   const ansArray = [];
   for (let i = 1;i <= 30;i++) {
      ansArray.push(numToFizzBuzz(i));
   }

   ans = ansArray.join(', ');

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Request-Method', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
   res.setHeader('Access-Control-Allow-Headers', '*');
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(ans);
   res.end();
});
server.listen(8080); 
