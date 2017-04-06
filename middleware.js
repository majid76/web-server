var middleware = {
 		requireAuthentication: function(req,res,next){
 			console.log('private route hited!');
 			next();
 		},
 		logger: function(req,res,next){
 			var currentDate = new Date().toString();
 			console.log(req.method + ' '+req.originalUrl + ' '+currentDate );
 			next();
 		}

 };

 module.exports = middleware;