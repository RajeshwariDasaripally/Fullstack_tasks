// use express
const express = require('express') 

//  write log information to a file
const fs = require ('fs');

// create express app
const app = express()

// Use JSON parser
app.use(express.json())

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

// get all users
app.get('/users', (request, response) => {
    response.json(users)
  })

// get one user
app.get('/users/:id', (request, response) => {
    //const id = request.params.id // note how you can do this in different ways!
    const { id } = request.params
    const user = users.find(user => user.id === id)
    if (user) response.json(user)
    else response.status(404).end()
  })

  // delete one user
app.delete('/users/:id', (request, response) => {
    //const id = request.params.id
    const { id } = request.params
    users = users.filter(user => user.id !== id)
    // Just send "204 no content" status code back
    response.status(204).end()
  })

  // update user data
app.put('/users/:id', (request, response) => {
    //const id = request.params.id
    const { id } = request.params
    // const name = request.query.name
    const { name } = request.query
    const user = users.find(user => user.id === id)
    if (user) {
      user.name = name
      response.status(200).end()
    } else {
      response.status(204).end()
    }
  })

// create a new user
app.post('/users/', (request, response) => {
    const maxId = Math.max(...users.map(user => user.id), 0)
    const user = request.body
    user.id = (maxId+1).toString() 
    users = users.concat(user) 
    response.json(user)
  })

app.listen(port, () => {
  console.log('Example app listening on port 3000')
})