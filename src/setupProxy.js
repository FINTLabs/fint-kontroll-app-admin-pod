const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api/resources', {
            target: 'http://localhost:8120/beta/fintlabs-no', // API endpoint 1
            changeOrigin: true,
            //pathRewrite: {"^/api1": ""},
            headers: {
                Connection: "keep-alive"
            }
        })
    );

    app.use(
        createProxyMiddleware('/api/resources/id', {
            target: 'http://localhost:8120/beta/fintlabs-no', // API endpoint 1
            changeOrigin: true,
            //pathRewrite: {"^/api1": ""},
            headers: {
                Connection: "keep-alive"
            }
        })
    );
    // app.use(
    //     createProxyMiddleware('/api/orgunits', {
    //         target: 'http://localhost:8081', // API endpoint 5
    //         changeOrigin: true,
    //         //pathRewrite: {"^/api5": ""},
    //         headers: {
    //             Connection: "keep-alive"
    //         }
    //     })
    // );
    /*app.use(
        createProxyMiddleware('/api/users', {
            target: 'http://localhost:8080',
            changeOrigin: true,
            //pathRewrite: {"^/api5": ""},
            headers: {
                Connection: "keep-alive"
            }
        })
    );*/
    app.use(
        createProxyMiddleware('/api/users', {
            target: 'http://localhost:8060/beta/fintlabs-no', // API endpoint 1
            changeOrigin: true,
            //pathRewrite: {"^/api1": ""},
            headers: {
                Connection: "keep-alive"
            }
        })
    );
    // app.use(
    //     createProxyMiddleware('/api/assignments', {
    //         target: 'http://localhost:8097',
    //         changeOrigin: true,
    //         //pathRewrite: {"^/api5": ""},
    //         headers: {
    //             Connection: "keep-alive"
    //         }
    //     })
    // );
}