# encryptojs
A utility for creating hash for data.

<b> How to Use </b>

init the crypt 
```javascript

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

```

init method will initilise with following:

```javascript
{
	workFactor : {
		info : "Definesnumber of iterations",
		default : 10000,
		type : "Number"
	},
 	algorithm_hash : {
 		info : "hashing algorithm that will be used for data hashing", 
 		default : "sha256",
 		valid_values : [ 'DSA','DSA-SHA','DSA-SHA1','DSA-SHA1-old','RSA-MD4','RSA-MD5','RSA-MDC2','RSA-RIPEMD160','RSA-SHA','RSA-SHA1','RSA-SHA1-2','RSA-SHA224','RSA-SHA256','RSA-SHA384','RSA-SHA512','dsaEncryption','dsaWithSHA','dsaWithSHA1','dss1','ecdsa-with-SHA1','md4','md4WithRSAEncryption','md5','md5WithRSAEncryption','mdc2',='mdc2WithRSA','ripemd','ripemd160','ripemd160WithRSA','rmd160','sha','sha1','sha1WithRSAEncryption','sha224','sha224WithRSAEncryption','sha256','sha256WithRSAEncryption','sha384','sha384WithRSAEncryption','sha512','sha512WithRSAEncryption','shaWithRSAEncryption',l2-md5','ssl3-md5','ssl3-sha1','whirlpool' ],
 		type :'String'
 	},
 	radix_args :{
 		info : "radix number",
 		default : 32,
 		valid_value : " from 0 to 36 both inclusive",
 		type : "Number" 
 	},
 	algorithm_salt : {
 		info : "hashing algorithm that will be used for salt hashing", 
 		default : "md5",
 		valid_values : [ 'DSA','DSA-SHA','DSA-SHA1','DSA-SHA1-old','RSA-MD4','RSA-MD5','RSA-MDC2','RSA-RIPEMD160','RSA-SHA','RSA-SHA1','RSA-SHA1-2','RSA-SHA224','RSA-SHA256','RSA-SHA384','RSA-SHA512','dsaEncryption','dsaWithSHA','dsaWithSHA1','dss1','ecdsa-with-SHA1','md4','md4WithRSAEncryption','md5','md5WithRSAEncryption','mdc2',='mdc2WithRSA','ripemd','ripemd160','ripemd160WithRSA','rmd160','sha','sha1','sha1WithRSAEncryption','sha224','sha224WithRSAEncryption','sha256','sha256WithRSAEncryption','sha384','sha384WithRSAEncryption','sha512','sha512WithRSAEncryption','shaWithRSAEncryption',l2-md5','ssl3-md5','ssl3-sha1','whirlpool' ],
 		type :'String'
 	}
}

```

Methods: 

```javascript

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

```
