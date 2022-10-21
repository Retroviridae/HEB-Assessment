let input1 = "The quick brown fox jumped over the lazy dog";
let input2 = "Hello World";
let input3 = "This is my third test case";


let exampleTwo = (inputString) =>{
    let outputString = "";
    let repeatedCharacters= "";
    for(let i = 0; i < inputString.length; i++){
        if(outputString.includes(inputString[i])){
            repeatedCharacters = repeatedCharacters.concat(inputString[i])
            
        }else{
            outputString = outputString.concat(inputString[i])
        };
    }
    console.log(inputString);
    console.log("New String: " + outputString + repeatedCharacters);
    console.log("Repeated characters: " + repeatedCharacters)
    console.log("")
};

// Time complexity: O(n), space: O(n). 
// Need to iterate over entire input so n time
// outputSting + repeatedCharacters = n, so n space


exampleTwo(input1);
exampleTwo(input2);
exampleTwo(input3);