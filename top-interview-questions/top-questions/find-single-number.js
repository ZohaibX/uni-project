// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//!!! You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// linear runtime complexity means O(n) --> that means it could also be 2 loops as O(n) + O(n) => O(n+n) = O(2n) => O(n)
// MUST NOTICE THE CONDITION -- only one number is single and all others  are TWICE -- no number will be thrice and only one will be single 
function findSingle(array) {
  let single = {} ; 
  
  for( let i = 0 ; i < array.length  ; i++ ) {
    if(single[array[i]]) delete single[array[i]]
    else {  single[array[i]] = array[i]   };
  }

  // as all the numbers in array are twice and only one number is single
  // so, those number which are twice, will be deleted from "single"
  // and "single" will have only one key which is single 
  // now as we don't know what  is the key.. Let's find out 

  for (let i = 0 ; i < array.length ; i++) {
    if(single[array[i]]) return array[i] ;
  }

  return single;
}

const result = findSingle([1,2,1,2,4,4,6,6,7,7,8])
console.log(result);