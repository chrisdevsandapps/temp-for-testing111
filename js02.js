

function addOne(xxx) {
	xxx = xxx + 1
	//console.log("result: ", xxx);
	
	//counter = counter + 1
	//console.log("counter: ", counter)
}


let result = 1;

let counter = 0;

while (counter < 20) {
	result = setTimeout(result => (result = result + 1), 1000)
	console.log("result: ", result);
	counter = counter + 1;
}
