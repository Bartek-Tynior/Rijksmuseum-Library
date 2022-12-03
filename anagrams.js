// Script that takes a list of any number of strings and will 
// determine which words in the list are exact anagrams of each other (ignoring spaces).

const words = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour',
    ]
    
let anagram = {};

for (let i = 0; i<words.length; i++){
  const word = words[i];
  const sortedWord = word.split("").sort().join("");
  const ignoreSpaces = sortedWord.trim();
  
  let tempArray = [];
  if(anagram[ignoreSpaces]){
    tempArray = anagram[ignoreSpaces].length==1?anagram[ignoreSpaces]:[...anagram[ignoreSpaces]];
    tempArray.push(word);
    anagram[ignoreSpaces] = tempArray;
  }else{
    anagram[ignoreSpaces] = [word];
  }
}

console.log(Object.values(anagram));