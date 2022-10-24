class FirstSolution {
    public static void main(String[] args) {
        String phrase1 = "The quick brown fox jumped over the lazy dog";
        String phrase2 = "Hello World";
        String phrase3 = "This is my third test case";
        removeDuplicates(phrase1);
        removeDuplicates(phrase2);
        removeDuplicates(phrase3);
    }

    public static void removeDuplicates(String inputString) {
        String outputString = "";
        String leftOverCharacters = "";
        for (int i = 0; i < inputString.length(); i++){
            if(outputString.contains(""+inputString.charAt(i))){
                leftOverCharacters = leftOverCharacters.concat(""+inputString.charAt(i));
            }else {
                outputString = outputString.concat(""+inputString.charAt(i));
            }
        }
        System.out.println("Input string: " + inputString);
        System.out.println("Original characters: " + outputString);
        System.out.println("Leftover characters:" + leftOverCharacters);
        System.out.println("New String: " + outputString + leftOverCharacters);
        System.out.println("");
    }
}