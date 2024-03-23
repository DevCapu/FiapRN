module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@locale': './src/locale',
          '@storage': './src/storage',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
