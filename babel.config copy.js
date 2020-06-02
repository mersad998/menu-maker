module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          utils: './src/utils',
          strings: './src/utils/constants/strings',
          assets: './assets',
        },
      },
    ],
  ],
};
