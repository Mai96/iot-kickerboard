import express from 'express'

const app = express()

// serve static assets from 'public' directory
app.use(express.static('public'))
app.use('/styles', express.static('node_modules/normalize.css'))

// start HTTP server on port 3000
app.listen(3000, () => {
  // do it!
  console.log('Listening on http://localhost:3000/')
})
