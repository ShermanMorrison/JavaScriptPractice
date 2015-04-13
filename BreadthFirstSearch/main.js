function Tree (id){
	this.id = id;
	this.left_child = null;
	this.right_child = null;
}


tree0 = new Tree("0");
tree0.left_child = new Tree("L");
tree0.right_child = new Tree("R");
tree0.left_child.left_child = new Tree("LL");
tree0.left_child.right_child = new Tree("LR");
tree0.right_child.right_child = new Tree("RR");


//Recursive solution passing tree depth

var layers = {};


function breadthFirst(my_tree, depth) {
	if (my_tree == null)
		return;
	if (layers[depth] == null)
		layers[depth] = [my_tree.id];
	else
		layers[depth].push(my_tree.id);
	breadthFirst(my_tree.left_child, depth+1);
	breadthFirst(my_tree.right_child, depth+1);

}

function breadthFirstDriver(my_tree) {
	breadthFirst(tree0,0);

	for (var key in layers){
		var layer = layers[key];
		var string = "";
		for (var i=0; i<layer.length; i++){
			string += String(layer[i]) + ", ";
		}
		string = string.substr(0, string.length-2);
		console.log(string);
	}
}


breadthFirstDriver(tree0);