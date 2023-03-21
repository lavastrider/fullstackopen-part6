const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const validator = (request, response, next) => {
  //console.log('this is print msg in validator body') 
  //above this fires when server startup (prob bc GET)

  const { content } = request.body

  if (request.method==='POST' && (!content || content.length<5) ) {
    //console.log('this is print msg in if statement bc no content or too short')
    //above is printed to server when post fails
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
