const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
// const morgan = require('morgan');

// const app=express('cors');
const app=express();

//MIDDLEWARE

// const port=3000;

app.use(cors());
// app.use(morgan('combine'));
app.use(bodyParser.json());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;
// app.listen(process.env.PORT || 3000)
app.listen(port, () => console.log('server started on port ${port}'));


app.get('status', (req, res) => {
    // const publishing = ["blablabla"];
    res.send({messages : 'Hello World'});
});




app.get('/publishing', (req, res)=> {
    const publishing = ["blablabla"];
    res.send(messages);
});

app.listen(port, () => console.log('app running'));
