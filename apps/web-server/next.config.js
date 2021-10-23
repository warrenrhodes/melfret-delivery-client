const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');
const withTM = require('next-transpile-modules')(['@emotion/native'])
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    nx: {
        // Set this to true if you would like to to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false,
    },
    webpack: (config) => {

        config.resolve = {
            ...config.resolve,
            alias: {
                ...(config.resolve.alias || {}),
                'react-native$': path.join(__dirname, '../../', 'node_modules', 'react-native-web'),
            },
            symlinks: true
        };

        return config
    }
};

module.exports = withTM(withNx(nextConfig));