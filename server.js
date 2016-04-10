var express    			= require('express');
var path    			= require('path');
var app        			= express();
var bodyParser 			= require('body-parser');
var mongoose   			= require('mongoose');
var async      			= require('async');
var config     			= require('./config.js');
var mongoConfig     	= require('./mongo-config.js');

var webpack 			= require('webpack');
var webpackConfig 		= require('./webpack.config');
var compiler 			= webpack(webpackConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;
var router = express.Router();

//=====| Webpack Middleware
var args = process.argv.slice(2);
var dev = false;
if(args.length){
	if(args[0] === 'dev'){
		dev = true;
		//webpack middleware for hot reloading
		app.use(require("webpack-dev-middleware")(compiler, {
		    noInfo: true, publicPath: webpackConfig.output.publicPath
		}));
		app.use(require("webpack-hot-middleware")(compiler));
	}
}

//=====| Client Routes / Static

var staticRoute = function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
};

if(!dev){
	app.use(express.static('public'));
}

router.get('/questions', function(req, res, next){
	var data = [
		{
	        data: 'What are the dorms like in Santa Lucia?',
	        answers: [
	        	{
	        		data: 'Not great, you could potentially share a bathrooom with the all-dudes floor...if you are a dude'
	        	}
	        ]
	    },
	    {
	        data: 'Best place to go #2 on the whole campus?',
	        answers: [
	        	{
	        		data: 'Engineering IV, 3rd floor, girls restroom, even if you are a dude. The acoustics are great!'
	        	},
	        	{
	        		data: '5th floor Baker'
	        	}
	        ]
	    },
	    {
	        data: 'Is it hard to get from class to class on campus?',
	        answers: [
	        	{
	        		data: 'Yes, Cal Poly calves are a thing'
	        	},
	        	{
	        		data: 'Nah, use a bike'
	        	}
	        ]
	    }
    ];
    res.json(data);
});

//=====| Routes

app.use('/api', router);

app.listen(port);
console.log('Server on port ' + port);
