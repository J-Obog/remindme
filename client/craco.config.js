const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '~pages': path.resolve(__dirname, 'src/pages'),
            '~components': path.resolve(__dirname, 'src/components'),
            '~context': path.resolve(__dirname, 'src/context'),
            '~layouts': path.resolve(__dirname, 'src/layouts'),
            '~assets': path.resolve(__dirname, 'src/assets'),
        },
    },
};
