const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const validator = (request, response, next) => {
  console.log('were we ever even going to reach here')

  const { content } = request.body
  console.log(content, 'is content in validator')

  if (request.method==='POST' && (!content || content.length<5) ) {
    console.log('is here where we trip?')
    return response.status(400).json({
      error: 'too short anecdote, must have length 5 or more'
    })
  } else {
    next()
  }
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(validator)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})

export default validator