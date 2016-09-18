var webpack = require( 'webpack' );

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js', // ordinary script files which are not prepared for webpack;
		'script!foundation-sites/dist/foundation.min.js', // we must use the script loaders
		'./app/app.jsx'
	], // the entry point is where webpack start bundling the files
	externals: {
		// { module-name } : { the variable we want to make available to the external files }
		jquery: 'jQuery' 
	},
	plugins: [
		new webpack.ProvidePlugin( { 
			// { variable to watch for } : { the module with which to replace it }
			'$': 'jquery',
			'jQuery': 'jquery'
		} )
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: [ '', '.js', '.jsx' ]
	},
	module: {

		loaders: [ 
			{	
				loader: 'babel-loader',
				query: {
					presets: [ 'react', 'es2015', 'stage-0' ] // tell babel what to do => compile files through react in es2015
				},
				test: /\.jsx?$/, // tell babel which files we want to apply this loader to
				exclude: /(node_modules|bower_components)/
			} 
		]
		
	},
	devtool: 'eval-source-map'
}