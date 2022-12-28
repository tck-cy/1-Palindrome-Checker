function palindrome(str) {
    let reversed = str.split("").reverse();
    let joined = reversed.join("");
    console.log(joined);

    // Remove punctuation from end of reversed string below 
    let regex = /^[A-Za-z0-9]/i
    console.log(regex.test(joined));
    if (regex.test(joined) !== true) {
        let resplit = joined.split("");
        console.log(resplit);
        let punctuation = resplit.shift();
        console.log(punctuation);
        let rejoined = resplit.join("");
        console.log(rejoined);
    }
  }
  
  console.log(palindrome("1 eye for of 1 eye."));