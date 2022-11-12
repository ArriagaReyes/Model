const path = require('path');
const { merge } = require('webpack-merge');
const portFinderSync = require('portfinder-sync');
const common = require('./common');

module.exports = merge(common, {
    mode: 'development',
    infrastructureLogging: {
        level: 'warn'
    },
    devServer: {
        host: 'local-ip',
        port: portFinderSync.getPort(8080),
        https: false,
        allowedHosts: 'all',
        hot: false,
        watchFiles: ['app/**'],
        static: {
            watch: true,
            directory: path.join(__dirname, '../app/assets')
        },
        setupMiddlewares: (middlewares, devServer) => {
            console.log('--------------------------------------------');
            const port = devServer.options.port;
            const https = devServer.options.https ? 's' : '';
            const networkDomain = `http${https}://${devServer.options.host}:${port}`;
            const localDomain = `http${https}://localhost:${port}`;

            console.log(`Project running at:\n - ${networkDomain}\n - ${localDomain}`);

            return middlewares;
        }
    },
});