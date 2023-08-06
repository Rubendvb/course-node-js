const express = require('express')
const crypto = require('node:crypto')

const movies = require('./movies.json')
const { validationMovie } = require('./schemas/movies')

const app = express()

app.use(express.json())
app.disable('x-powered-by') // desabilita o header X-POWERED-BY: Express

app.get('/movies', (req, res) => {
  const { genre } = req.query

  if (genre) {
    const filterMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    )

    return res.json(filterMovies)
  }

  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params

  const movie = movies.find((movie) => movie.id === id)

  if (movie) {
    return res.json(movie)
  }

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validationMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  }

  movies.push(newMovie)

  res.status(201).json(newMovie)
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
