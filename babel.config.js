module.exports = {
  env: {
    development: {
      presets: [
        'module:@react-native/babel-preset',
      ],
      plugins: [
        'react-native-reanimated/plugin'
      ]
    },
    storybookWeb: {
      presets: [
        'module:@react-native/babel-preset',
      ],
      plugins: [
        'babel-plugin-react-native-web',
        'react-native-reanimated/plugin'
      ],
    }
  },
};
