const inputText = document.querySelector('.input-text')
const outputText = document.querySelector('.output-text')

let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function btnEncrypt(){
  const encryptText = encrypt(inputText.value)
  outputText.value = encryptText
  inputText.value = ""
  outputText.style.backgroundImage = "none"
}

function encrypt(encryptString){
  encryptString = encryptString.toLowerCase()

  for (let i = 0; i < matrix.length; i++) {
    if(encryptString.includes(matrix[i][0])){
      encryptString = encryptString.replaceAll(matrix[i][0], matrix[i][1])
    }
  }
  return encryptString
}

function btnDecrypt(){
  const encryptText = decrypt(inputText.value)
  outputText.value = encryptText
  inputText.value = ""
}

function decrypt(decryptString){
  decryptString = decryptString.toLowerCase()

  for (let i = 0; i < matrix.length; i++) {
    if(decryptString.includes(matrix[i][1])){
      decryptString = decryptString.replaceAll(matrix[i][1], matrix[i][0])
    }
  }
  return decryptString
}

function copy(){
  const text = outputText.value
  navigator.clipboard.writeText(text)
}