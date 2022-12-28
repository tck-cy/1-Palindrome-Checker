# 1-Palindrome-Checker for FreeCodeCamp JavaScript Final Projects 1/5. 
First i split the given string into an array then use map to convert all the letters to lowercase to ease the comparison step later. 
the array is then filtered using  \p{Nd} and \p{L} to remove everything non-digit or letter. 
A copy of this array is made. 
This is done so that a single for loop can be used to iterate from the front of the array and back of the array. 
Initialize the isPalindrome variable to true before the loop then iterate and use the if statement to check if characters do not match. 
The isPalindrome variable is set to false if they don't match and break the loop to finish.
Return the isPalindrome variable. 
