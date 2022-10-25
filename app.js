const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'DELETE',
        'PUT',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));
const regionRouter = require('./routes/regionRouter')
app.use('/region', regionRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})