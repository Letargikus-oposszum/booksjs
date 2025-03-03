import express from 'express'
import bookRoutes from './routes/booksroutes.js'

const app = express()
app.use(express.json())
app.use('/books',bookRoutes)

app.listen(3000,()=>{
    console.log('The server is running!')
})