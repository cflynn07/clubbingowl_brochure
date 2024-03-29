express = require 'express'
routes  = require './routes'
http    = require 'http'
path    = require 'path'

app = express()
app.configure () ->
  app.use (req, res, next) ->
    res.removeHeader 'X-Powered-By'
    next()
  
  if process.env.NODE_ENV is 'production'
    app.set 'port', 8080
  else
    app.set 'port', 8080
    
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'ejs'
  app.use express.favicon()
  app.use express.logger 'dev'
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.static path.join __dirname, 'public'
  app.use app.router

app.configure 'development', () ->
  app.use express.errorHandler()

app.get '/',              routes.index

app.get '/features',            routes.features
app.get '/features/:feature',   routes.feature

app.get '/faq',           routes.faq;
app.get '/about',         routes.about 


app.get '/blog/:index',          routes.blog_all
app.get '/blog/entry/:entry',    routes.blog_entry


app.get '/contact',       routes.contact
app.post '/contact',      routes.post_contact


app.get '*',              routes.error

http.createServer(app).listen app.get('port'), (x) ->
  console.log 'Express server listening on port ' + app.get('port')