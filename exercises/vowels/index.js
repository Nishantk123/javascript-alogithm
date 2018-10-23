// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const checker = "aeiou";
    for(let char of str.toLoweCase()){
    if(checker.includes(char)){
        counter++;
    }
    }
    return count;
}

module.exports = vowels;
