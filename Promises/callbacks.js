var method = function(num, callback3, callback2, callback1){
	num = num + 20;
	callback1(num,callback3,callback2);
}

var method2 = function(num, callback3, callback2){
	num = num + 10;
	callback2(num,callback3);
}

var method3 = function(num, callback3){
	num = num + 5;
	callback3(num);
}

method(5, function(num){console.log("callbacks give " + num)},method3,method2);







var num = 5;

var promise = new Promise(
	function (resolve){
		resolve(num + 20);
	}
)

var promise2 = promise.then(
	function(num2){
		num2 = num2 + 10;
		return new Promise(
			function(resolve){
				resolve(num2);
			}
		)
	}
)

var promise3 = promise2.then(
	function(num2){
		num2 = num2 + 5;
		return new Promise(
			function(resolve){
				resolve(num2);
			}
		)
	}
)

promise3.then(
	function(num3){
		console.log("promises give " + num3);
	}
)


// Each a.then() calls its function with the resolution of a. So the function in then() is a callback.
// Instead of nesting callbacks to have methods wait on each other, have each then() return a promise which resolves to the next value.
// Each then() does the callback function and then returns a Promise which resolves to the desired result. 


promise
	.then(
		function(num2){
			num2 = num2 + 10;
			return new Promise(
				function(resolve){
					resolve(num2);
				}
			)
		}
	)
	.then(
		function(num2){
			num2 = num2 + 5;
			return new Promise(
				function(resolve){
					resolve(num2);
				}
			)
		}
	)
	.then(
		function(num3){
			console.log("anonymous promises give " + num3);
		}
	)
