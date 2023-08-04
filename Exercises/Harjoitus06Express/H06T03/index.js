// use express
const express = require('express') 

//  write log information to a file
const fs = require ('fs');

// create express app
const app = express()

// Use JSON parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// define port
const port = 3000

// path for text file
const path = './logtext.txt';

// create logger
const logger = (request, response, next) => {
  const date = new Date();
  const lDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  const log = `${lDate}: ${request.method} ${request.url}\n`;
  console.log(log)

  // append log to file
  fs.appendFile(path, log, (err) => {
    if (err) {
      console.error(err);
    }
  });

  next()
}

// use own made logger middleware in express app
app.use(logger)

// define some data as a JSON format
let users = 
[
  { 'id':'1', 'name':'Kirsi Kernel' },
  { 'id':'2', 'name':'Matti Mainio' }
]

const listUserHtml = () => {
  let html = '<table><tr><th>ID</th><th>Name</th></tr>';
  users.forEach((user) => {
    html += `<tr><td>${user.id}</td><td>${user.name}</td></tr>`;
  });
  html += '</table>';
  return html;
};

const addNewUserHtml = () => {
  return `
    <form action="/users" method="post">
      Add a new user:<input type="text" name="name"><br>
      <input type="submit" value="Add user">
    </form>
  `;
};
// template for the HTML
const htmlTemplate = (content) => {
  return `
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <ul>
          <li><a href="/users">List of users</a></li>
          <li><a href="/add-new-user">Add a new user</a></li>
        </ul>
        ${content}
      </body>
    </html>
  `;
};

// get all users
app.get('/users', (request, response) => {
  const html = htmlTemplate(`${listUserHtml()}`);
  response.send(html);
});

// get adding a new user
app.get('/add-new-user', (request, response) => {
  const html = htmlTemplate(`${addNewUserHtml()}`);
  response.send(html);
});

// get one user
app.get('/users/:id', (request, response) => {
  //const id = request.params.id // note how you can do this in different ways!
  const { id } = request.params
  const user = users.find(user => user.id === id)
  if (user) {
    const html = htmlTemplate(`
      <h1>User found</h1>
      <p>ID: ${user.id}, Name: ${user.name}</p>
    `);
    response.send(html);
  } else {
    response.status(404).send('<h2>User not found</h2>');
  }
})

// create a new user
app.post('/users/', (request, response) => {
    const maxId = Math.max(...users.map(user => user.id), 0)
    const user = request.body
    user.id = (maxId+1).toString() 
    users = users.concat(user) 
    response.redirect('/users')
  })

app.listen(port, () => {
  console.log('Example app listening on port 3000')
})