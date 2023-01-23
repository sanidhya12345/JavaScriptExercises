//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function string_reverse(str) 
function LetterChanges(text) {
var s = text.split('');
for (var i = 0; i < s.length; i++) {
// Caesar cipher
switch(s[i]) {
case ' ':
break;
case 'z':
s[i] = 'a';
break;
case 'Z': 
s[i] = 'A';
break;
default:
s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
}

// Upper-case vowels
switch(s[i]) {
case 'a': case 'e': case 'i': case 'o': case 'u':
s[i] = s[i].toUpperCase();
}
}
return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));
