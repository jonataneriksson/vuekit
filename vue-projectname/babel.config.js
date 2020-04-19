module.exports = {
  plugins: ['@babel/transform-runtime'],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3',
        targets: {
          ie: 11
        }
      }
    ]
  ]
};
