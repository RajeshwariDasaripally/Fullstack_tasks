const http = require('http');
const fs = require ('fs');
const hostname = '127.0.0.1';
const port = 3000;
const path = './text.txt';

const server = http.createServer((req, res) => {

  fs.readFile(path,(error, data) => {
    if (error) {
      console.error(error);
      res.statusCode = 500;
      res.end();
  }else {
        let count = Number(data.toString()) + 1; // data object into number
        count = count + '';   // numeric value to a string by concatenating an empty string '' to it

    fs.writeFile(path, count, (error)=>{
      if (error) {
        console.error(error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain')
        res.end();
      }else{
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.write('Hello World!\n')
      res.write('Request counter value is' + count)
      res.end()
        }
      });
    
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})