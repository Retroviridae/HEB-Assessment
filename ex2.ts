let tsInput1 = "The quick brown fox jumped over the lazy dog";
let tsInput2 = "Hello World";
let tsInput3 = "This is my third test case";


let tsExampleTwo = (inputString: String):void =>{
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
    console.log("New String: " + outputString);
    console.log("Repeated characters: " + repeatedCharacters);
    console.log("This has been in TypeScript");
    console.log("");
};

// Time complexity: O(n), space: O(n). 
// Need to iterate over entire input so n time
// outputSting + repeatedCharacters = n, so n space


tsExampleTwo(tsInput1);
tsExampleTwo(tsInput2);
tsExampleTwo(tsInput3);

