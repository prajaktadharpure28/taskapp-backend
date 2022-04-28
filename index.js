const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

app.use(express.json());

const PORT = 5000;

mongoose.connect('mongodb+srv://suraj:suraj@cluster0.gfb4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('Connected to database');
});
app.get('/', (req, res) =>{
    res.send('hello world');
})

app.post('/add/user', (req, res) =>{
   const user = {
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
   }

   const newUser = new User(user);
   newUser.save((err, data) => {
       if(err) {
           console.log(err);
       } else {
           res.json(data);
       }
   })
});
app.post('/add/task', (req, res) => {
    console.log(req.body);
    res.send({
        status: 'success',
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});