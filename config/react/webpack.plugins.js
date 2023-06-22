const { isDev } = require('../common/webpack.helpers');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = [
  isDev() && new ReactRefreshWebpackPlugin(),
].filter(Boolean);
