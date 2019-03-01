// Array map 

const elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']; // Určení pole s hodnotami
  const arrayLength = elements.map(element => {  // vysledky -> 'arrayLength' = "sežrání" hodnot z pole 'elements' -> vrátí délku slov * 2
    return element.length * 2;
  });
  console.log(arrayLength); // Výpis hodnot 'arrayLength'
// expected output: Array [ 16, 12, 14, 18]

// Array sort
const first = [4, 6, 8, 7]; // Určení pole s hodnotami
const firstSorted = first.sort((a, b) => { // výsledky -> 'firstSorted' = "Sežere" první a druhou hodnotu a porovná velikost (ano - nechá na místě / ne - přehodí),
    if ( a > b){                           // [0, 1] -> [1, 2] -> [2, 3]
        return 1;
    }

    return -1;
});
console.log(firstSorted);
// expected output: Array [ 4, 6, 7, 8 ]

// Array filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; // Určení pole s hodnotami
const result = words.filter(word => {word.length > 6}); // Projíždí hodnoty -> Pokud je string.length > 6 -> zapíše do 'result'
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// Array concut
var array1 = ['a', 'b', 'c']; // Hodnoty pole
var array2 = ['d', 'e', 'f']; // Hodnoty pole

console.log(array1.concat(array2)); // Hlavní pole = 'array1' -> spojí se s 'array2'
// expected output: Array ["a", "b", "c", "d", "e", "f"]
