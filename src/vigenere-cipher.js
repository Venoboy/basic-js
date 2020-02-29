class VigenereCipheringMachine {
  constructor (direction) {
    direction === false ? this.direction = false : this.direction = true;
  }
  encrypt(message, key) {
    if (!(message && key)) throw new Error;
    let arr = message.toUpperCase().split(''),
      arrFiltered = arr.filter(elem => {
        return /[A-Z]/.test(elem)
      });
    let upperKey = key.toUpperCase(),
      keyRepeat = Math.floor(arrFiltered.length / upperKey.length),
      keyRepeatParts = arrFiltered.length % upperKey.length,
      properKey = (upperKey.repeat(keyRepeat) + upperKey.slice(0, keyRepeatParts)).split(''),
      cipher = arrFiltered.map((elem, index) => {
        let messageCode = elem.charCodeAt(0),
          keyCode = properKey[index].charCodeAt(0);
        if (messageCode + keyCode - 130 > 25) {
          messageCode -= 26;
        }
        return String.fromCharCode(messageCode + keyCode - 65)
      });
    let counter = -1,
    result = arr.map((elem) => {
      if (/[A-Z]/.test(elem)) {
        counter++;
        return cipher[counter]
      } else return elem
    }).join('');
    return this.direction ? result : result.split('').reverse().join('')
  }

  decrypt(cipher, key) {
    if (!(cipher && key)) throw new Error;
    let arr = cipher.toUpperCase().split(''),
      arrFiltered = arr.filter(elem => {
        return /[A-Z]/.test(elem)
      });
    let upperKey = key.toUpperCase(),
      keyRepeat = Math.floor(arrFiltered.length / upperKey.length),
      keyRepeatParts = arrFiltered.length % upperKey.length,
      properKey = (upperKey.repeat(keyRepeat) + upperKey.slice(0, keyRepeatParts)).split(''),
      message = arrFiltered.map((elem, index) => {
        let cipherCode = elem.charCodeAt(0),
          keyCode = properKey[index].charCodeAt(0);
        if (cipherCode - keyCode < 0) {
          cipherCode += 26;
        }
        return String.fromCharCode(cipherCode - keyCode + 65)
      });
    let counter = -1,
    result = arr.map((elem) => {
      if (/[A-Z]/.test(elem)) {
        counter++;
        return message[counter]
      } else return elem
    }).join('');

    return this.direction ? result : result.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
