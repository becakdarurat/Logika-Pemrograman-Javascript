/* Soal 1: Hitung Vokal
 Buatlah fungsi countVowels yang menerima
 sebuah string sebagai parameter dan
 mengembalikan jumlah huruf vokal (a, e,
 i, o, u) dalam string tersebut. */

function countVowels ( str ) { 
    const vowels = `aeiouAEIOU`;
    let count = 0;
   
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
 } 

//  Menampilkan hasil
const inputStr1 = `Hello Worl!`;
console.log(`Jumlah vokal dalam "${inputStr1}": ${countVowels(inputStr1)}`);

/* 
    Soal 2: Nilai Tertinggi

    Buatlah fungsi findMax yang menerima
    array angka dan mengembalikan nilai
    tertinggi dalam array tersebut.
*/

function findMax(arr) {
    if ( arr.length === 0 ) return null; // Menghindari jika arraynya kosong
    let max = arr[0];

    for (const item of arr) {
        if ( item > max ) { 
            max = item;
        }
    }
    return max;
}

// Menampilkan hasil
const numbers = [1,5,3,9,2];
console.log(`Nilai tertinggi dari [${numbers}]: ${findMax(numbers)}`);
