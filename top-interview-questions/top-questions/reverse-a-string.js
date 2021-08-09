// Write a function that reverses a string. The input string is given as an array of characters s.
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseArray (arrayOfString) {
  let reversedArray = [] ;

  for(let i=arrayOfString.length-1 ; i >=0 ; i-- ){
    reversedArray.push(arrayOfString[i]) ;
  }

  return reversedArray ;
}

const result3 = reverseArray(["h","e","l","l","o"]); // array.reverse()
console.log(result3) ;


// normal reversing a string

function reverseAString(string) {
  let reversedString = "";
  const stringLength = string.length
  for(let i=string.length-1 ; i >= 0 ; i--) {
    reversedString = reversedString + string[i]
    }

  return reversedString
 }

 const result = reverseAString("ZohaIb"); // biahoZ
 console.log(result)

// javascript built-in function

function reverseAString2(string) {
  return string.split("").reverse().join("")
}

const result2 = reverseAString2("ZohaIb");
console.log(result2)