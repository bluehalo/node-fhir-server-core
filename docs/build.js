const config = require('./webpack.config');
const webpack = require('webpack');

const compiler = webpack(config);

// Add a progress indicator
compiler.apply(new webpack.ProgressPlugin((percent, message) => {
	console.log(`${Math.floor(percent * 100)}% ${message.toString()}`);
}));

console.log('\x1B[1mBuilding API docs...\x1B[22m');
console.log('--------------------');

compiler.run((err, stats) => {

	// Output some statistics
	// console.log(stats.toString({
	// 	errorDetails: true,
	// 	warnings: true,
	// 	chunks: false,
	// 	colors: true
	// }));

	// Build is completed
	console.log('-----------------------');
	console.log('\x1B[1mWebpack finished build.\x1B[22m');
	console.log('-----------------------');

});
