const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001,
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]'
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'pocMfNav',
            remotes: {
                pocMfFooter: "pocMfFooter@[pocMfFooterUrl]/remoteEntry.js"
            },
            shared: { react: { singleton: true }, 'react-dom': { singleton: true } }
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
}