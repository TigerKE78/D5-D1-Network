const express = require('express');
const app = express()
const port = 7000
// http://localhost:3000/
// Query string 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// http://localhost:3000/about
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
// http://localhost:3000/login?username=admin&password=123456
app.get('/login', (req, res) => {
    const { username, password } = req.query;
    console.log(`Username: ${username}, Password: ${password}`);
    console.log(req.query);
    res.send({
        status: 200,
        message: 'Login success',
        data: req.query,
        endpoint: req.path
    })
})
// req.params
// http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    console.log(`User ID: ${id}`);
    res.send({
        status: 200,
        message: 'User found',
        data: { id },
        endpoint: req.path
    });
});
// http://localhost:3000/user/123/john
app.get('/user/:id/:name', (req, res) => {
    const { id, name } = req.params;
    console.log(`User ID: ${id}, Name: ${name}`);
    res.send({
        status: 200,
        message: 'User found',
        data: { id, name },
        endpoint: req.path
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})