import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const port = 5000

// const uri = 'mongodb+srv://icesoup:pegasis8@aloo.e7een.mongodb.net/?retryWrites=true&w=majority'
const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000'

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected'))


app.listen(port)
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

// app.get('/', (req, res) => {
//   res.send(`Hello World!`)
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })
