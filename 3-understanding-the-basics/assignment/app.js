const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><body>");
        res.write("<h1>hello</h1>");
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>')
        res.write("</body></html>")
        res.end();
    }
    if(req.url === "/users"){
        res.write("<html><body>")
        res.write("<ul>")
        res.write("<li>User 1</li>")
        res.write("<li>User 2</li>")
        res.write("</ul>")
        res.write("</body></html>")
        res.end();
    }
    if(req.url === "/create-user"){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString();
            console.log(bodyParsed.split('=')[1]);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
})

server.listen(3000);