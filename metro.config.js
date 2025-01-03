const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const {wrapWithReanimatedMetroConfig} = require('react-native-reanimated/metro-config');


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const config = {
};
// set your own config here 👆

const finalConfig = mergeConfig(defaultConfig, config);

module.exports = wrapWithReanimatedMetroConfig(withStorybook(finalConfig, {
    // Set to false to remove storybook specific options
    // you can also use a env variable to set this
    enabled: true,
    // Path to your storybook config
    configPath: path.resolve(__dirname, './.storybook'),
    useJs: true,

    // Optional websockets configuration
    // Starts a websocket server on the specified port and host on metro start
    // websockets: {
    //   port: 7007,
    //   host: 'localhost',
    // },
}));
