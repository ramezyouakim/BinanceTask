module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-proposal-decorators', {version: 'legacy'}],
      ['@babel/plugin-transform-class-properties', {loose: true}],
      ['@babel/plugin-transform-private-methods', {loose: true}],
      ['@babel/plugin-transform-private-property-in-object', {loose: true}],
    ],
  };
};
