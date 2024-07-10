module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@locale': './src/locale',
          '@storage': './src/storage',
          '@routes': './src/routes',
          '@analytics': './src/analytics',
          '@services': './src/services',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
