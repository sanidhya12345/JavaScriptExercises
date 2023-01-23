//Write a JavaScript program to count the number of vowels in a given string. 
function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));