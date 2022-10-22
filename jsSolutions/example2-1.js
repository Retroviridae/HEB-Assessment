let input1 = "The quick brown fox jumped over the lazy dog";
let input2 = "Hello World";
let input3 = "This is my third test case";


let exampleTwo = (inputString) =>{
    let outputString = "";
    let leftoverCharacters= "";
    for(let i = 0; i < inputString.length; i++){
        if(outputString.includes(inputString[i])){
            leftoverCharacters = leftoverCharacters.concat(inputString[i])
            
        }else{
            outputString = outputString.concat(inputString[i])
        };
    }
    console.log("Input string: " + inputString);
    console.log("Original characters: " + outputString);
    console.log("Leftover characters: " + leftoverCharacters)
    console.log("New String: " + outputString + leftoverCharacters);
    console.log("");
};

// Time complexity: O(n), space: O(n). 
// Need to iterate over entire input so n time
// outputSting + repeatedCharacters = n, so n space


exampleTwo(input1);
exampleTwo(input2);
exampleTwo(input3);



let commentedExampleTwo = (inputString) =>{
    let outputString = "";
    let leftoverCharacters= "";
    for(let i = 0; i < inputString.length; i++){
        // Check if character has been seen before
        if(outputString.includes(inputString[i])){
            leftoverCharacters = leftoverCharacters.concat(inputString[i])
            
        }else{
            outputString = outputString.concat(inputString[i])
        };
    }
    
    console.log("Input string: " + inputString);
    // A list of the first instance of a character
    console.log("Original characters: " + outputString);
    // List of characters that are leftovers
    console.log("Leftover characters: " + leftoverCharacters)
    // Output string
    console.log("New String: " + outputString + leftoverCharacters);
    // Empty line for console formatting
    console.log("");
};