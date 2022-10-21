let input1 = "The quick brown fox jumped over the lazy dog";
let input2 = "Hello World";
let input3 = "This is my third test case";


let exampleTwo = (inputString) =>{
    let outputString = "";
    let duplciateCharacters= "";
    for(let i = 0; i < inputString.length; i++){
        if(outputString.includes(inputString[i])){
            duplciateCharacters = duplciateCharacters.concat(inputString[i])
            
        }else{
            outputString = outputString.concat(inputString[i])
        };
    }
    console.log("Input string: " + inputString);
    console.log("Original characters: " + outputString);
    console.log("Duplciate characters: " + duplciateCharacters)
    console.log("New String: " + outputString + duplciateCharacters);
    console.log("");
};

// Time complexity: O(n), space: O(n). 
// Need to iterate over entire input so n time
// outputSting + repeatedCharacters = n, so n space


exampleTwo(input1);
exampleTwo(input2);
exampleTwo(input3);