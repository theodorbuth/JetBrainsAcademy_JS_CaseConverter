document.getElementById("upper-case").onclick = convertToUpper;
document.getElementById("lower-case").onclick = convertToLower;
document.getElementById("proper-case").onclick = convertToProper;
document.getElementById("sentence-case").onclick = convertToSentence;
document.getElementById("save-text-file").onclick = downloadFile;



function convertToUpper(){
    console.log("Convert to upper case");

    let textArea = document.getElementById("input-text");
    let inputString = textArea.value;

    console.log(inputString);

    inputString = inputString.toUpperCase();

    console.log(inputString);

    textArea.value = inputString;
}

function convertToLower(){
    console.log("Convert to lower case");

    let textArea = document.getElementById("input-text");
    let inputString = textArea.value;

    console.log(inputString);

    inputString = inputString.toLowerCase();

    console.log(inputString);

    textArea.value = inputString;
}

function convertToProper(){
    console.log("Covert to proper case");

    let textArea = document.getElementById("input-text");
    let inputString = textArea.value;

    console.log(inputString);

    inputString = inputString.toLowerCase().split(' ').map(function (word){
        return word.length === 0 ? word : word.replace(word[0], word[0].toUpperCase());
    }).join(' ');

    console.log(inputString);

    textArea.value = inputString;
}

function convertToSentence(){
    console.log("Convert to sentence case");

    let textArea = document.getElementById("input-text");
    let inputString = textArea.value;

    console.log(inputString);

    inputString = inputString.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});

    console.log(inputString);

    textArea.value = inputString;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadFile(){
    download("text.txt", document.getElementById("input-text").value);
}