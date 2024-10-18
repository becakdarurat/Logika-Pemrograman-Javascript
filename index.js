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
        } else {
            
        }
    }
    return count;
 } 

//  Menampilkan hasil
const inputStr1 = `Hello Worl!`;
console.log(`Jumlah vokal dalam "${inputStr1}": ${countVowels(inputStr1)}`);
