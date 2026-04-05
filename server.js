const http = require('http');
const url = require('url');

const PORT = 5000;

const sendResponse = (res, statusCode, data, contentType = 'application/json') => {
    res.writeHead(statusCode, {
        'Content-Type': contentType,
        'X-Powered-By': 'Node.js'
    });

    res.end(
        contentType === 'application/json'
            ? JSON.stringify(data, null, 2)
            : data
    );
};

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();

            // Prevent very large payloads
            if (body.length > 1e6) {
                req.connection.destroy();
                reject(new Error('Request body too large'));
            }
        });

        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(new Error('Invalid JSON'));
            }
        });

        req.on('error', err => reject(err));
    });
};

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    console.log(`${new Date().toISOString()} | ${req.method} ${pathname}`);

    try {
        if (req.method === 'GET' && pathname === '/') {
            return sendResponse(res, 200, {
                message: 'Welcome to the Home Page'
            });
        }

        if (req.method === 'GET' && pathname === '/about') {
            return sendResponse(res, 200, {
                message: 'This is the About Page',
                author: 'Nikhil'
            });
        }

        if (req.method === 'GET' && pathname === '/user') {
            const name = query.name || 'Guest';
            return sendResponse(res, 200, {
                message: `Hello, ${name}`
            });
        }

        if (req.method === 'POST' && pathname === '/data') {
            const body = await parseBody(req);
            return sendResponse(res, 201, {
                message: 'Data received successfully',
                receivedData: body
            });
        }

        if (req.method === 'GET' && pathname === '/html') {
            return sendResponse(
                res,
                200,
                `
                <html>
                    <head><title>HTML Page</title></head>
                    <body>
                        <h1>HTML Response</h1>
                        <p>This is a custom HTML response.</p>
                    </body>
                </html>
                `,
                'text/html'
            );
        }

        return sendResponse(res, 404, {
            error: 'Route not found'
        });
    } catch (error) {
        return sendResponse(res, 500, {
            error: error.message || 'Internal Server Error'
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


git revert HEAD
