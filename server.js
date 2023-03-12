import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    return res.json(data)
  } catch (error) {
    console.log(`Oops! Ocorreu um erro ${error}`)
  }
})

app.listen('4567', () => console.log('HTTP Running Server!'))