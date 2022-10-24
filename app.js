const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')

const regionRouter = require('./routes/regionRouter')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/region', regionRouter)
app.use(express.static('public'))
app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})