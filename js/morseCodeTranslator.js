var patternMap = new Map();
patternMap.set("A", ".-");
patternMap.set("B", "-...");
patternMap.set("C", "-.-.");
patternMap.set("D", "-..");
patternMap.set("E", ".");
patternMap.set("F", "..-.");
patternMap.set("G", "--.");
patternMap.set("H", "....");
patternMap.set("I", "..");
patternMap.set("J", ".---");
patternMap.set("K", "-.-");
patternMap.set("L", ".-..");
patternMap.set("M", "--");
patternMap.set("N", "-.");
patternMap.set("O", "---");
patternMap.set("P", ".--.");
patternMap.set("Q", "--.-");
patternMap.set("R", ".-.");
patternMap.set("S", "...");
patternMap.set("T", "-");
patternMap.set("U", "..-");
patternMap.set("V", "...-");
patternMap.set("W", ".--");
patternMap.set("X", "-..-");
patternMap.set("Y", "-.--");
patternMap.set("Z", "--..");
patternMap.set("0", "-----");
patternMap.set("1", ".----");
patternMap.set("2", "..---");
patternMap.set("3", "...--");
patternMap.set("4", "....-");
patternMap.set("5", ".....");
patternMap.set("6", "-....");
patternMap.set("7", "--...");
patternMap.set("8", "---..");
patternMap.set("9", "----.");
patternMap.set(".", ".-.-.-");
patternMap.set(",", "--..--");
patternMap.set(":", "---...");
patternMap.set("-", "-....-");
patternMap.set("'",".----.");
patternMap.set("?","..--..");
patternMap.set("!", "..--.");


function translateToCode(){

    var codet = prompt("enter a sequence to translate").toUpperCase();
    var codeOut = "";
    var curchar;
    for (var i = 0; i< codet.length; i++){
        curchar = codet[i];
        var morseChar = patternMap.get(curchar);
        if(morseChar != null){
            codeOut+=morseChar;
            codeOut+=" ";
        }else if(curchar === " "){
            codeOut+="| ";
        }
    }
    console.log(codeOut);
    document.getElementById('result').innerHTML = codeOut;
}