//Write a JavaScript program which prints the elements of the following array. 
//Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

// a sample 2-D array 
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}
