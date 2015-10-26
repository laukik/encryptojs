var encrypto = require('../lib/encrypto');
var enc = new encrypto();

enc.init({
	"workFactor" : "aaa",
	'algorithm_hash'  : "sha256",
	'radix_args' : 31,
	'algorithm_salt' : 'md5',
}, function (err){
	if(err) console.log(err);
});


enc.generateSalt(function (err, salt ){
	console.log(salt);
	console.log(enc);
	saltx = salt;
});

enc.generateHash( "Secrate", saltx, function (err, data){
	if(err)
		console.log(err);
	else{
		console.log(data);
		ash = data.hash;
		//store hash and salt for future
	}
});



enc.validate("Secrate",ash, saltx, function (err, flag){
	if(err)
		console.log(err);
	else{
		console.log(flag);
	}
});


	