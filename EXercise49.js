//Write a JavaScript function to get the function name.

function abc() {
    console.log( arguments.callee.name );
}

abc();
