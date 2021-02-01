document.querySelector("input[type='button']")
    .addEventListener("click", crypt)

function crypt() {
    let text = document.querySelector("textarea").value
    let cypher = Number(document.querySelector("#cypher").value)

    let encryptedText = encrypt(text, cypher)

    document.querySelector("#result").innerText = encryptedText
}

function encryptAscii(text, cypher){

    let encryptedText = text.split("")
    .map(letter => encryptLetter(letter, cypher))
    .join("")
return encryptedText
}

function encryptLetter(letter, cypher){
    let ascii = letter.charCodeAt(0)
    let encryptedAscii = (ascii - 65 + cypher) % 26 + 65
    return String.fromCharCode(encryptedAscii) 
}

function encrypt(text, cypher) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let encryptedAlphabet = shift(alphabet, cypher)
    let letterMap = zipAlphabet(alphabet, encryptedAlphabet)
    let encryptedText = text.split("")
        .map(letter => letterMap[letter])
        .join("")
    return encryptedText
}

function shift(alphabet, cypher) {
    let firstCut = alphabet.slice(0, cypher)
    let secondCut = alphabet.slice(cypher)
    return secondCut.concat(firstCut)
}

function zipAlphabet(alphabet1, alphabet2) {
    let zip = {}
    for (let i = 0; i < alphabet1.length; i++) {
        let firstLetter = alphabet1[i]
        let secondLetter = alphabet2[i]

        zip[firstLetter] = secondLetter
    }

    return zip
}