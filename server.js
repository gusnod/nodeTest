/* jshint node: true*/
/*jshint esnext: true */

const Hapi = require('Hapi');

const PORT = 80;

const server = new Hapi.Server();
server.connection({port: PORT});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
