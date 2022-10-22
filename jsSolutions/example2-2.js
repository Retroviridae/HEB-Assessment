let input1 = "The quick brown fox jumped over the lazy dog";
let input2 = "Hello World";
let input3 = "This is my third test case";

let exampleTwo = (inputString) =>{
    let outputString = "";
    let leftoverCharacters= "";
    let characterCount = {};
    for(let i = 0; i < inputString.length; i++){
        if(characterCount[inputString[i]] === undefined){
            characterCount[inputString[i]] = 1;
            outputString = outputString.concat(inputString[i]);
        }else{
            leftoverCharacters = leftoverCharacters.concat(inputString[i]);
            characterCount[inputString[i]]++;
        };
    }
    console.log("Input string: " + inputString);
    console.log("Original characters: " + outputString);
    console.log("Leftover characters: " + leftoverCharacters)
    console.log("New String: " + outputString + leftoverCharacters);
    // console.log(characterCount);
    console.log("");
};


// Time complexity: O(n), space: O(n). 
// Need to iterate over entire input so n time
// This solution I changed the if condition
// Should be slightly faster because checking a key is O(1) vs O(n) for includes()
// Still O(n) time and space


exampleTwo(input1);
exampleTwo(input2);
exampleTwo(input3);

let commentedExampleTwo = (inputString) =>{
    let outputString = "";
    let leftoverCharacters= "";
    // Frequency counter hash map
    let characterCount = {};
    for(let i = 0; i < inputString.length; i++){
        // Check if character is in the hash
        if(characterCount[inputString[i]] === undefined){
            // Add original character to output
            outputString = outputString.concat(inputString[i]);
            // Add character as key to the hash
            characterCount[inputString[i]] = 1;
        }else{
            // If seen before add to duplciate list
            leftoverCharacters = leftoverCharacters.concat(inputString[i]);
            // Increment counter
            characterCount[inputString[i]]++;
        };
    }
    console.log("Input string: " + inputString);
    console.log("Original characters: " + outputString);
    console.log("Leftover characters: " + leftoverCharacters)
    console.log("New String: " + outputString + leftoverCharacters);
    // Character count is the frequency counter hash map
    // console.log(characterCount);
    console.log("");
};