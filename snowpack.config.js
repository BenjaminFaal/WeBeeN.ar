/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: {url: '/', static: true},
        src: {url: '/dist'}
    },
    routes: [
        {"match": "routes", "src": ".*", "dest": "/index.html"}
    ],
    optimize: {
        bundle: true,
        minify: true,
        treeshake: true
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
    ]
};
