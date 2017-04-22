import path from 'path';

 export default {
   entry: [
     './src/index.js'
   ],
   output: {
     filename: 'js/bundle.js',
     path: path.resolve(__dirname, 'dist'),
     publicPath: '/static/'
   },
   module: {
     rules: [
       {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
       }
     ]
   },
   resolve: {
     extensions: ['.js', '.jsx']
   },
   devServer: {
     port: 8080
   }
 }
