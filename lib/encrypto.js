var crypto = require('crypto');

const WORK_FACTOR_DEFAULT = 10000;
const ALGORITHM_HASH_DEFAULT = "sha256";
const RADIX_ARGS_DEFAULT = 32;
const ALGORITHM_SALT_DEFAULT = 'md5';


function encrypto() {
	this.workFactor = WORK_FACTOR_DEFAULT;
	this.algorithm_hash = ALGORITHM_HASH_DEFAULT;
	this.algorithm_salt = ALGORITHM_SALT_DEFAULT;
	this.radix_args = RADIX_ARGS_DEFAULT;
}


encrypto.prototype.init = function (param, callback) {
	var algoList;
	if( param.workFactor ){
		if( !isFinite(param.workFactor) ) callback( "workFactor: " + param.workFactor + " is Not Numeric");
		else this.workFactor = param.workFactor;
	}
	if( param.algorithm_hash ){
		algoList = crypto.getHashes();
		if( algoList.indexOf(param.algorithm_hash) == -1){
			var err = "Invalid algorithm_hash :" + param.algorithm_hash + " algorithm should be in following : " + algoList; 
			callback(err, null);
		}else
		this.algorithm_hash = param.algorithm_hash;
	}
	if( param.algorithm_salt ){
		algoList = crypto.getHashes();
		if( algoList.indexOf(param.algorithm_salt) == -1){
			var err = "Invalid algorithm_hash :" + param.algorithm_salt + " algorithm should be in following : " + algoList; 
			callback(err, null);
		}else
		this.algorithm_salt = param.algorithm_salt;
	}
	if( param.radix_args ){
		if( !isFinite(param.radix_args) ) callback( "radix_args: " + param.radix_args + " is Not Numeric"); 
		else this.radix_args = param.radix_args;
	}
	callback(null);
};

encrypto.prototype.generateSalt = function( callback) {
	var algoSalt = crypto.createHash(this.algorithm_salt);
	callback(null, algoSalt.update(Math.random().toString(this.radix_args).slice(2)).digest('hex'));
};

encrypto.prototype.generateHash = function(passwd, salt, callback) {
	var output = {};
	var algoHash = crypto.createHash(this.algorithm_hash);
	var hash = algoHash.update(passwd).digest('hex');
	for (var i = 0; i < this.workFactor; i++) {
		algorithm_hash = crypto.createHash(this.algorithm_hash);
		hash = algorithm_hash.update(hash + salt).digest('hex');
	}
	output.hash = hash;
	output.salt = salt;
	callback(null, output);
};

encrypto.prototype.validate = function( passwd, hash, salt, callback) {
	this.generateHash(passwd,salt, function (err, data){
		if( data.hash == hash){
			callback( null, true);
		}else{
			callback( null, false);
		}
	});
};

module.exports= encrypto;
