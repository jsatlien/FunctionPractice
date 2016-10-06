ve// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------

var findBiggest = function (numbers) {
  var biggest = numbers[0];
  for (var count = 1; count < numbers.length; count++) {
    var currentNumber = numbers[count];
    if (currentNumber > biggest) {
      biggest = currentNumber;
    };
  };
  return biggest;
};



// var largest = function (numbers) {
//   var largestNum = numbers[0];
//   for(var count = 0; count < numbers.length, count++) {
//   }
// }


// ---------------------------
// 2. Find longest string
// ---------------------------

var findLongest = function (strings) {
  var longest = strings[0];
  for (var count = 1; count < strings.length; count++) {
    if (strings[count].length > longest.length) {
      longest = strings[count];
    };
  };
  return longest;
};


// ---------------------------
// 3. Find even numbers
// ---------------------------

var findEven = function (numbers) {
  var EvenNumbs = []
  for(var count = 0; count < numbers.length; count++) {
    if(numbers[count] % 2 === 0) {
      EvenNumbs.push(numbers[count]);
    };
  };

  return EvenNumbs;
};

// ---------------------------
// 4. Find odd numbers
// ---------------------------

var findOdd = function (numbers) {
  var oddNumbs = [];
  for(var count = 0; count < numbers.length; count++) {
    if(numbers[count] % 2 === 1) {
      oddNumbs.push(numbers[count]);
    };
  };

  return oddNumbs;
};

// ---------------------------
// 5a. Find words that contain `is`
// ---------------------------

var findIs = function(strings) {
  var isWords = [];
  for(var count = 0; count < strings.length; count++) {
    if (strings[count].includes("is")) {
      isWords.push(strings[count]);
    };
  };
  return isWords;
};

// ---------------------------
// 5b. Join Both Arrays Together
// ---------------------------

var joinArrays = function (numbers, strings) {
    var newArray = []
    for(var count = 0; count < numbers.length; count++) {
      newArray.push(numbers[count]);
    };
    for(var count = 0; count < strings.length; count++) {
      newArray.push(strings[count]);
    };
  return newArray;
};



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

var javaScriptAlph = function (instructors) {
  var stringify = instructors[String([0]),[String([0])]]
  console.log(stringify)
  var newList = [];
  for (var count = 0; count < instructors.length; count++) {
    if (instructors.teaches.includes("JavaScript")) {
      newList.push(instructors[count[1]]);
    };
  };
  return newList;
};
