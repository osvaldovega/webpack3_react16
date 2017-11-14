import webpack from 'webpack'; // eslint-disable-line
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpackConfig from '../webpack.config.dev';

webpackConfig.plugins.push(new BundleAnalyzerPlugin());

process.env.NODE_ENV = 'develop';

const compiler = webpack(webpackConfig);

compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }

  console.log(stats); // eslint-disable-line no-console
});
