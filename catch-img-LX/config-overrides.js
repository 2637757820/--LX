const {
  override,
  overrideDevServer,
  fixBabelImports,
  setWebpackTarget,
  addWebpackAlias
} = require('customize-cra');
// const { paths } = require('react-app-rewired');
const path = require('path');

const appPath = target => path.join(__dirname, target);

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    setWebpackTarget('electron-renderer'),
    addWebpackAlias({
      '@': appPath('src'),
      '@hooks': appPath('src/renderer/hooks'),
      '@components': appPath('src/renderer/components'),
      '@router': appPath('src/renderer/router')
    })
  ),
  devServer: overrideDevServer(),
  paths: (paths, env) => {
    paths.appBuild = path.join(__dirname, 'build/react');
    return paths;
  }
};
