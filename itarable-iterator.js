
function segitiga1(baris) {
    let pola = '';

    for (let i = 0; i <= baris; i++) {
        for(let j = 1; j <= i; j++) {
            pola += '*';
        }
        
        pola += '\n'
    }

    return pola;
}

console.log(segitiga1(5));

/* Output Segitiga 1 */

/* 

*
**
***
****
*****

*/


function segitiga2(baris) {
    let pola = '';

    for(let i = 1; i <= baris; i++) {
        for(let j = baris; j >= i; j--){
            pola += '*';
        }

        pola += '\n'
    }
    return pola;
}

console.log(segitiga2(5));

/* Output Segitiga 2 */

/* 

*****
****
***
**
*

*/


function segitiga3(baris) {
    let pola = '';

    for(let i = 1; i <= baris; i++) {
        for(let j = baris - 1; j >= i; j--) {
            pola += ' ';
        }
        for (let k = 1; k <= i; k++) {
            pola += '*';
        }

        pola += '\n';
    }

    return pola;
}

console.log(segitiga3(5));

/* Output Segitiga 3 */

/* 

    *
   **
  ***
 ****
*****

*/


function segitiga4(baris) {
    let pola = '';

    for (let i = 1; i <= baris; i++) {
        for(let j = baris - 1; j >= i; j--) {
            pola += ' ';
        }

        for(let k = 1; k <= i; k++) {
            pola += '*';
        }

        for(let m = 1; m <= i - 1; m++){
            pola += '*';
        }

        pola += '\n';
    }

    return pola;
}

console.log(segitiga4(5));

/* Output Segitiga 4 */

/* 

    *
   ***
  *****
 *******
*********

*/

function segitiga5(baris) {
    let pola = '';

    for(let i = 1; i <= baris; i++) {
        for(let j = 1; j <= i; j++){
            pola += ' ';
        }

        for(let k = i; k <= baris; k++) {
            pola += '*';
        }

        for(let m = i; m <= baris - 1; m++){
            pola += '*';
        }

        pola += '\n'
    }
    return pola;
}

console.log(segitiga5(5));

/* Output Segitiga 5 */

/* 

 *********
  *******
   *****
    ***
     *

*/