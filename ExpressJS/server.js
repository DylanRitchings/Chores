const express = require('express');
const app = express();

[{
  "id": 1,
  "description": "",
  "title": "",
  "assigned to": "",
  "created by": "",
  "due": ""
  
}]


app.get('/getAll', (req, res) => response.send('fetch'));

app.get('/getById', (req, res) => response.send('fetch'));

app.post('/create', (req, res) => response.send('create'));

app.put('/replace', (req, res) => response.send('replace'));

app.patch('/update', (req, res) => response.send('update'));

app.delete('/delete', (req, res) => response.send('delete'));


app.listen(8080, () => {
    console.log("Server is listening...");
});
