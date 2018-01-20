import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const DEBUG = process.env.NODE_ENV !== 'production';
const BROWSER_SUPPORT = [
  '> 1%',
  'last 2 versions',
  'not ie > 0',
];

const PATH_CONTEXT = process.env.PATH_CONTEXT || '/';

const polyfills = [
];

const commonOptions = {
  entry: [
    ...polyfills,
    path.resolve(__dirname, 'src/Main.jsx'),
  ],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    publicPath: PATH_CONTEXT,
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: BROWSER_SUPPORT,
              },
              debug: false,
              modules: false,
              useBuiltIns: false,
            }], 'stage-2'],
          },
        }, 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            {
              loader: 'sass-loader',
              options: {
                /* eslint prefer-template: 0 */
                data: '$path-context: "' + PATH_CONTEXT + '";',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
              },
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url-loader?limit=100&name=fonts/[name]_[hash].[ext]'],
      },
      {
        test: /\.jsx$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets: ['react'],
        },
      },
    ],
  },
};

const commonPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ROOT_URL: JSON.stringify(process.env.PATH_CONTEXT),
    },
    DEBUG: JSON.stringify(DEBUG),
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: '/',
      sassLoader: {
        includePaths: [
          path.resolve(__dirname, './node_modules'),
        ],
      },
    },
  }),
  new ExtractTextPlugin('style.css'),
];

const commonHtmlWebpackPluginOptions = {
  inject: true,
  template: path.resolve(__dirname, './src/index.html'),
};

export default DEBUG
  ? {
    // Debug.
    ...commonOptions,
    devtool: 'inline-source-map',
    plugins: [
      ...commonPlugins,
      new HtmlWebpackPlugin(commonHtmlWebpackPluginOptions),
    ],
    devServer: {
      host: '0.0.0.0',
      port: 9000,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallback: true,
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
    },
  }
  : {
    // Production.
    ...commonOptions,
    plugins: [
      ...commonPlugins,
      new HtmlWebpackPlugin({
        ...commonHtmlWebpackPluginOptions,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: { screw_ie8: true, warnings: false },
        mangle: { screw_ie8: true },
        output: { comments: false, screw_ie8: true },
        sourceMap: false,
      }),
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname),
      }),
    ],
  };
