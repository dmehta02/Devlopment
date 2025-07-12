const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('Hello ahout!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello blog2!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello pyhton!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
