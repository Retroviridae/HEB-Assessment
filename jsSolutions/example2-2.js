let input1 = "The quick brown fox jumped over the lazy dog";
let input2 = "Hello World";
let input3 = "This is my third test case";


let exampleTwo = (inputString) =>{
    let outputString = "";
    let repeatedString= "";
    let repeatedCharacters = {};
    for(let i = 0; i < inputString.length; i++){
        if(repeatedCharacters[inputString[i]] !== undefined){
            repeatedString = repeatedString.concat(inputString[i]);
            repeatedCharacters[inputString[i]] = i;

        }else{
            outputString = outputString.concat(inputString[i]);
        };
    }
    console.log(inputString);
    console.log("New String: " + outputString + repeatedCharacters);
    console.log("Repeated characters: " + repeatedCharacters)
    console.log("")
};

// Time complexity: O(n), space: O(n)
// Need to iterate over entire input so n time
// For this I used a hash map to store what has been seen so far. .includes() is O(n)
// Checking a key in a hash is O(1)
// Still O(n) time because we need to iterate over the whole input
// Also still O(n) space 


exampleTwo(input1);
exampleTwo(input2);
exampleTwo(input3);