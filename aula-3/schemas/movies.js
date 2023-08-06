// Importando a biblioteca Zod
const z = require('zod')

// Definindo o esquema de validação para o objeto "movie"
const movieSchema = z.object({
  // Campo "title": deve ser uma string, com mensagens de erro personalizadas para validação
  title: z.string({
    invalid_type_error: 'Movie title must be a string', // Mensagem de erro para tipo inválido
    required_error: 'Movie title is required', // Mensagem de erro para campo obrigatório não fornecido
  }),

  // Campo "year": deve ser um número inteiro, no intervalo entre 1900 e 2004
  year: z.number().int().min(1900).max(2004),

  // Campo "director": deve ser uma string
  director: z.string(),

  // Campo "duration": deve ser um número inteiro positivo
  duration: z.number().int().positive(),

  // Campo "rate": deve ser um número, com valor mínimo 0, valor máximo 10 e valor padrão 5 se não fornecido
  rate: z.number().min(0).max(10).default(5),

  // Campo "poster": deve ser uma string representando uma URL válida, com mensagem de erro personalizada para validação
  poster: z.string().url({
    message: 'Poster must be a valid url', // Mensagem de erro para URL inválida
  }),

  // Campo "genre": deve ser um array contendo valores do enum 'Genre'
  genre: z.array(
    z.enum([
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',
      'Thriller',
      'Sci-Fi',
      'Crime',
    ]),
    {
      required_error: 'Movie genre is required', // Mensagem de erro para campo obrigatório não fornecido
      invalid_type_error: 'Movie genre must be an array of enum Genre', // Mensagem de erro para tipo inválido
    }
  ),
})

// Função que realiza a validação de um objeto "movie" de acordo com o esquema definido acima
function validationMovie(input) {
  return movieSchema.safeParse(input) // Retorna o resultado da validação do objeto em relação ao esquema
}

// Função que realiza a validação de um objeto parcial "movie" de acordo com o esquema definido acima
function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input) // Retorna o resultado da validação do objeto parcial em relação ao esquema
}

// Exporta a função de validação para ser utilizada em outros módulos
module.exports = {
  validationMovie,
  validatePartialMovie,
}
