let input1 = "The quick brown fox jumped over the lazy dog";
let input2 = "Hello World";
let input3 = "This is my third test case";


let exampleTwo = (inputString) =>{
    let outputString = "";
    let duplciateCharacters= "";
    let characterCount = {};
    for(let i = 0; i < inputString.length; i++){
        if(characterCount[inputString[i]] === undefined){
            characterCount[inputString[i]] = 1;

            duplciateCharacters = duplciateCharacters.concat(inputString[i]);
            
        }else{
            outputString = outputString.concat(inputString[i]);
            characterCount[inputString[i]]++;
        };
    }
    console.log("Input string: " + inputString);
    console.log("Original characters: " + outputString);
    console.log("Duplciate characters: " + duplciateCharacters)
    console.log("New String: " + duplciateCharacters + outputString);
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