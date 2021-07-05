const express = require('express');
const app = express();

let chores = [{
  "id": 1,
  "description": "",
  "title": "",
  "assigned to": "",
  "created by": "",
  "due": ""
},
{  "id": 2,
  "description": "desc",
  "title": "title",
  "assigned to": "assigned",
  "created by": "created",
  "due": "14/11/1998"}]


app.get('/getAll', (res) => response.send(chores));

app.get('/getById', (req, res) => response.send(chores));

app.post('/create', (req, res) => response.send());

// app.put('/replace', (req, res) => response.send(chores));

app.patch('/update', (req, res) => response.send('update'));

app.delete('/delete', (req, res) => response.send('delete'));


app.listen(8080, () => {
    console.log("Server is listening...");
});
