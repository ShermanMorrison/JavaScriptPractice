//make singleton that has its own methods, essentially static methods
//singleton also has a factory method to return objects


var SortedObjectModule = new function(){
	this.list;
	this.sort = function(input_list){
		if (input_list.constructor === Array)
			return input_list.sort();
		else
			throw "Error: SortedObjectModule.sort(arr) takes an array arr"
	}
	this.make = function(){
		return new function(){
			this.list = SortedObjectModule.list;
			this.sort = SortedObjectModule.sort;
		}
	}
}

var a = SortedObjectModule.sort([3,5,4]);
var obj = SortedObjectModule.make();

var b = obj.sort([4,6,5]);

// var b = obj.list;
console.log(a);
console.log(b);


// console.log(SortedObjectModule.list)
SortedObjectModule.list = 10;
// console.log(SortedObjectModule.list)


function myFunction (list){
	this.list = list;
	this.staticFunc = function(){
		console.log("static!");
	}
}

var foo = new myFunction;
foo.staticFunc(); 

// can't have a SortedObjectModule.sort() and also a new SortedObjectModule
// can have a static sort function and a factory function. COOL!