module.exports = {
    rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*'
            },
            {
                source: '/:path*',
                destination: 'http://localhost:5173/:path*'
            },
            // {
            //     source: '/',
            //     destination: 'http://localhost:5173/'
            // },
        ]
    }
}
