const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running on port 5000\n');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
