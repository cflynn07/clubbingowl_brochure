os 				      = require 'os'
url 			      = require 'url'
html_minifier   = require 'html-minifier'

render_views = (req, res, body_view, code = 200) ->

  complete = (arg) ->

    response  = arg.response
    code      = arg.code

    if query.hasOwnProperty 'ajaxify'
      res.send html_minifier.minify response.body,
        collapseWhitespace: true
        removeComments: true,
        code
    else
      if response.header != '' and response.body != '' and response.footer != ''
        res.send html_minifier.minify response.header + response.body + response.footer,
          collapseWhitespace: true
          removeComments: true,
          code
  
  query = url.parse(req.url, true).query
  
  response = 
    header: ''
    body:   ''
    footer: ''
  
  if query.hasOwnProperty 'ajaxify'
    
    code = 200
    res.render body_view, {}, (err, html) ->
      response.body = html
      complete
        response: response
        code:     code
    
  else
    res.render body_view, {}, (err, html) ->
      response.body = html
      complete
        response: response
        code:     code

    res.render 'view_header', {}, (err, html) -> 
      response.header = html
      complete 
        response: response
        code:     code

    res.render 'view_footer', {}, (err, html) -> 
      response.footer = html
      complete 
        response: response
        code:     code


exports.index = (req, res) ->
  render_views(req, res, 'view_index')
    
exports.services = (req, res) ->
  render_views(req, res, 'view_services')

exports.about = (req, res) ->
  render_views(req, res, 'view_about')

exports.blog = (req, res) ->
  render_views(req, res, 'view_blog')

exports.contact = (req, res) ->
  render_views(req, res, 'view_contact')

exports.error = (req, res) ->
  render_views(req, res, 'view_error', '404')
