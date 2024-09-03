const express = require('express');
const cors = require('cors');
const morgan = require('morgan')


const app = express()
app.use(cors())
app.use(express.json());

app.use(morgan('tiny'));

app.get('/', (req, res)=>{
    const book = {
        id:"1",
        color:"white",
        brand:"vw",
    }
    res.json(book)
    // res.send('hello you are at the right place')
})













app.listen(5000,()=>{
    console.log('Your server is running:http://localhost:5000')
})

