//Write a JavaScript function that returns a passed string with letters in alphabetical order
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));
