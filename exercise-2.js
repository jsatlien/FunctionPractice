// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y) {
    if (x > y)
      return x;
    else
      return y;
}
// TERNARY CONDITIONALS! alternate syntax to the above.
  function ternaryMax (x, y)
    return x > y ? x : y;

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
};

// OR:

function maxOfThree(x, y, z) {
  if (x >= y && x >= z) { return x; }
  if (y >= x && y >= z) { return y; }
  return z;
};
  // ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function isVowel(char){
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
       return true;
    }  else if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
        return true;
    }  else {
        return false;
    };

    // better way to write it:

function cleanerIsVowel (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
};
// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var letters = [];
    for (var counter = 0; [counter < string.length]; [counter++]) {
      if (counter != "a" || counter != "e" || counter != "i" || counter != "o" || counter != "o") {
        return letters[(phrase[counter]) + "o" + (phrase[counter])];
      }  else {
        return phrase[counter];
      };

    };
};

// Brit's Way:

function translate(phrase) {
  var newPhrase = "";
  for(var count = 0; count < phrase.length; count++) {
    var letter = phrase[count];
    if (cleanerIsVowel(letter) || letter === " ") {
      newPhrase += letter;
    } else {
      newPhrase += letter + "o" + letter;
    };
  };
  return newPhrase;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
    var letters = [];
    for (var count = 0; count < string.length; count++) {
      var letters.unshift(letter)
    }

function reverseAlt (string) {
  var newString = "";
  for (var count = string.length - 1; count >= 0; count--) {
    var letter = string[count]
    newString += letter;
  }
  return newString;
};
