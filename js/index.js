//  1- task sort array element

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a, b) {
    return a - b;
});

console.log(arr1);


//----------------------------------------

//2-find the most frequent item in an array
var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 4, 'a', 2, 4, 9, 3];
var count = arr2.filter(function(item) {
    return item === "a";
}).length;
console.log("a " + count + " items");


// 3- colors

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["st", "nd", "rd", "th", "th", "th", "th"];

for (var i = 0; i < color.length; i++) {
    var num = i + 1;
    var ord = o[i];
    console.log(num + ord + " choice is " + color[i] + ".");
}
//------------------------------------------------------------
// 4- revers number

var x = 32243;

function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
}
console.log(reverseNumber(x));
//-------------------------------

//5- max number

var Numbers = [-5, -2, -6, 0, -1];
var largest = Math.max(...Numbers);
console.log(largest);
//----------------------
// 6-loop *

var x = '*'
for (var j = 0; j <= 5; j++) {
    for (var i = 0; i < j; i++) {
        document.write('*');
    }
    document.write('<br>')
}