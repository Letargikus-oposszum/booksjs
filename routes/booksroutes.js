import express from 'express'
import books from '../books/books.js'

const router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).json(books)
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > books.length){
        return res.json({message:"Book not found"})
    }
    res.status(200).json(books[id])
})

router.post('/', (req, res) =>{
    const {author,title,year} = req.body
    if (!author|title||!year){
        return res.status(404).json({message: "Missing data"})
    }
    const newBook = {author,title,year};
    books.push(newBook)
    res.status(201).json(newBook)
})

router.put('/:id', (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > books.length){
        return res.json({message:"Book not found"})
    }
    const {author,title,year} = req.body
    if (!author|title||!year){
        return res.status(404).json({message: "Missing data"})
    }
    res.status(200).json(books[id])
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > books.length){
        return res.json({message:"Book not found"})
    }
    books.splice(id, 1)
    res.status(200).json({message:"Book has been successfully deleted!"})
})

export default router