/**
 * Created by silasmartinez on 6/18/15.
 */
var http = require('http'),
  fs = require('fs'),
  mime = require('mime')

var server = http.createServer(function (req, res) {
  var reqUrl = req.url === '/' ? './index.html' : '.' + req.url
  mime.default_type = 'text-html'
  fs.readFile(reqUrl, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write('404 Not Found\n')
      return
    }
    res.setHeader('Content-Type', mime.lookup(req.url))
    res.end(data)
  })

})

var port = process.env.PORT || 9001
server.listen(port)
