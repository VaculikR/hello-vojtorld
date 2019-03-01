/**
 * Array map
 */

// Určení pole s hodnotami
const elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']; 

// vysledky -> 'arrayLength' = "sežrání" hodnot z pole 'elements' -> vrátí délku slov * 2
const arrayLength = elements.map(element => {  
	return element.length * 2;
});

// Výpis hodnot 'arrayLength'
console.log(arrayLength); 
// expected output: Array [ 16, 12, 14, 18]


/**
 * Array sort
 */

// Určení pole s hodnotami
const first = [4, 6, 8, 7];

// výsledky -> 'firstSorted' = "Sežere" první a druhou hodnotu a porovná velikost (ano - nechá na místě / ne - přehodí),
// z first na indexu [0] a [1] -> [1] a [2] -> [2] a [3]
const firstSorted = first.sort((a, b) => { 
	if ( a > b){                           
		return 1;
	}

	return -1;
});

console.log(firstSorted);
// expected output: Array [ 4, 6, 7, 8 ]


/**
 * Array filter
 */

// Určení pole s hodnotami
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; 

// Projíždí hodnoty -> Pokud je string.length > 6 -> zapíše do 'result'
const result = words.filter(word => { word.length > 6 });

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


/**
 * Array concat
 */

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

// 'array1' -> spojí se s 'array2'
console.log(array1.concat(array2)); 
// expected output: Array ["a", "b", "c", "d", "e", "f"]

