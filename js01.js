

let arrayX = ['aaa',
	'bbb',
	'ccc',
	'ddd',
	'eee',
	'fff',];

console.log("arrayX: ", arrayX);
let arraySpliced = arrayX.splice(1, 1, 'hehehe', 'hahaha', 'wow');

console.log("arrayX: ", arrayX);

console.log("arraySpliced: ", arraySpliced);



function doHomework(subject, callback) {
	console.log(`starting my ${subject} homework.`);
	callback();
}

function finishedHomework() {
	console.log('finished homeowork');
}

doHomework('math', finishedHomework);



// find duplicates in an array
let sampleData = [54,32,5,11,35,32,17,3,3,22,4,1,6,11]

function findDup(xxx) {
	let uniqueElements = new Map();
    let repeatedElements = [];
	for (let i = 0; i < xxx.length; i++) {
		if (uniqueElements.has(xxx[i])) {
			repeatedElements.push(xxx[i])
		} else {
			uniqueElements.set(xxx[i], xxx[i])
		}
	}
	return repeatedElements;
}

console.log(' ');
console.log(findDup(sampleData));

// todo: https://javascript.info/map-set
// https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
// https://www.drupal.org/docs/develop/standards/javascript/jquery-coding-standards
// https://gomakethings.com/let-const-and-block-scoping-in-javascript/



// block scoping

var sandwich = 'tuna'
let drink = 'soda'

console.log("sandwich: ", sandwich)

console.log("drink: ", drink)

console.log('-----')

if (true) {
	var sandwich = 'turkey'
	console.log("sandwich: ", sandwich)

	let drink = 'water'
	console.log("drink: ", drink)
}


console.log('-----')

console.log("sandwich: ", sandwich)

console.log("drink: ", drink)


// iife
function hello() {
	console.log('hello')
}
hello()

let teacherx = 'teacher one';
console.log(teacherx);

(function anotherTeacher() {
   let teacherx = 'teacher two';
   console.log(teacherx);
})()

console.log(teacherx)
