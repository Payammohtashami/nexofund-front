const path = require('path')
const withImages = require("next-images");

module.exports = withImages({
    // future: {
    //     webpack5: false,
    // },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // sassLoader: {
    //     includePaths: [path.resolve(__dirname, "./src")]
    //  },
    images: {
        disableStaticImages: true,
        domains: ['http://localhost:3002', 'http://localhost:3003', 'https://ds447a7iqja4o.cloudfront.net'],
    },
    webpack5: false,
})