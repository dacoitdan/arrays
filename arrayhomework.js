// Number 1
var num = [2, 3, 4, 5, 6];
var last = num[num.length-1];
var mult = num[0] * num[1];

for(var i = 0; i < num.length-1; i++){
	num[i] *= num[i+1];
}

console.log(num);
console.assert(num[num.length-1] === last);
console.assert(num[0] === mult);


// Number 2
num = [-50, 2, 99, -129, 110];

var biggest = 0;

for(var i = 0; i < num.length; i++){
	if(Math.abs(num[i]) > Math.abs(biggest)){
		biggest = num[i];
	}
}

console.log(biggest);
for(var i = 0; i < num.length; i++){
	console.assert(Math.abs(biggest) >= Math.abs(num[i]));
}


// Number 3
var go = ['go', 'go', 'go', 'stop', 'stop', 'go'];
var index;

for(var i = 0; i < go.length; i++){
	if(go[i] === 'stop'){
		index = i;
		break;
	}
}

console.log(index);
console.assert(index === go.indexOf('stop'));


// Number 4
var string = 'I did not have sexual relations with that woman';
var letters = string.split("");
var newstring = "";
for(var i = 0; i < letters.length; i++){
	newstring = newstring + letters[letters.length-i-1];
}

console.log(newstring);
console.assert(newstring.split("").reverse().join("") === string);

// Number 5
var words = string.split(' ');
var oldwords = string.split(' ');
for(var i = 0; i < words.length/2; i++){
	if(words[i] != words[words.length-i-1]){
		var word = words[i];
		words[i] = words[words.length-i-1];
		words[words.length-i-1] = word;
	}
}

console.log(words);
console.assert(oldwords[0] === words[words.length-1]);
console.assert(oldwords[oldwords.length/2] === words[words.length-1-words.length/2])