/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/


function drawStairs(n) {

  ctr = 1;

  for (var i = 0; i < n; i++) {
    array = [];

    for (var j = 0; j < (n - ctr); j++) {
      array.push(' ')
    }

    for (var k = 0; k < ctr; k++) {
      array.push('*')
    }

    console.log(array.join(''))
    ctr++;
  }


}


drawStairs(6)




function drawStairs2(n) {

  ctr = 1;

  for (var i = 0; i < n; i++) {
    array = [];

    for (var j = n; j > 0; j--) {
      if (j <= ctr) {
        array.push('*')
      } else {
        array.push(' ')
      }
    }

    console.log(array.join(''))
    ctr++;
  }

}

drawStairs2(6)



module.exports = drawStairs;
