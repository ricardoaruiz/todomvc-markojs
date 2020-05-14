require('marko/node-require');

const path = require('path');
const fs = require('fs-extra');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const template = require('./src/index.marko');

if (process.argv[3] === 'production') {
  const html = template.renderToString();
  const file = `${__dirname}/public/index.html`;
  fs.ensureFileSync(file);
  fs.writeFileSync(file, html, { overwrite: true });
}

module.exports = {
  entry: './src/bundle.js',
  watchOptions: { poll: true },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.marko'],
  },
  module: {
    rules: [
      { test: /\.marko$/, use: [{ loader: 'marko-loader' }] },
      {
        test: /\.sass|css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ],
  },
  plugins: [
    // Write out CSS bundle to its own file:
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
  ],
  devServer: {
    disableHostCheck: true,
    before: (app) => {
      app.get('/', async (req, res) => {
        try {
          const html = await template.renderToString();
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.send(html);
        } catch (err) {
          res.send(err);
        }
      });
    },
  },
};
