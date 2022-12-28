function palindrome(str) {
    //split the string, lowercase and remove non non letters and numbers
    let front = str.split('').map(ch => ch.toLowerCase()).filter(ch => /\p{L}|\p{Nd}/u.test(ch));
    //second array to iterate through from back
    let copy = front.slice(0);
 
// iterating through both front to back 
let isPalindrome = true;
for (let i = 0, j = copy.length - 1; i < front.length; i++, j--) {
    if (front[i] !== copy[j]) {
        isPalindrome = false;
        break;
    } 
}
return isPalindrome;
}

console.log(palindrome("1 eye for of 1 eye."));