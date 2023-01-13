const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome')
    }
    if (req.url === '/about') {
        res.end('sshortt story')
    }
    res.end(`
    <h1> OOps </h1>
    <p> We can find page</p>
    <a href="/">back home </a>
    `)
})

server.listen(5000)