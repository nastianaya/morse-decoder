const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      let res = expr.match(/[01*]{10,10}/g)
    let ress = res.join()
    let newress = ress.replace (/0000001011/gi, 'a') 
    newress = newress.replace (/0011101010/gi, 'b')
    newress = newress.replace (/0011101110/gi, 'c')
    newress = newress.replace (/0000111010/gi, 'd')
    newress = newress.replace (/0000000010/gi, 'e')
    newress = newress.replace (/0010101110/gi, 'f')
    newress = newress.replace (/0000111110/gi, 'g')
    newress = newress.replace (/0010101010/gi, 'h')
    newress = newress.replace (/0000001010/gi, 'i')
    newress = newress.replace (/0010111111/gi, 'j')
    newress = newress.replace (/0000111011/gi, 'k')
    newress = newress.replace (/0010111010/gi, 'l')
    newress = newress.replace (/0000001111/gi, 'm')
    newress = newress.replace (/0000001110/gi, 'n')
    newress = newress.replace (/0000111111/gi, 'o')
    newress = newress.replace (/0010111110/gi, 'p')
    newress = newress.replace (/0011111011/gi, 'q')
    newress = newress.replace (/0000101110/gi, 'r')
    newress = newress.replace (/0000101010/gi, 's')
    newress = newress.replace (/0000000011/gi, 't')
    newress = newress.replace (/0000101011/gi, 'u')
    newress = newress.replace (/0010101011/gi, 'v')
    newress = newress.replace (/0000101111/gi, 'w')
    newress = newress.replace (/0011101011/gi, 'x')
    newress = newress.replace (/0011101111/gi, 'y')
    newress = newress.replace (/0011111010/gi, 'z')
    newress = newress.replace (/1011111111/gi, '1')
    newress = newress.replace (/1010111111/gi, '2')
    newress = newress.replace (/1010101111/gi, '3')
    newress = newress.replace (/1010101011/gi, '4')
    newress = newress.replace (/1010101010/gi, '5')
    newress = newress.replace (/1110101010/gi, '6')
    newress = newress.replace (/1111101010/gi, '7')
    newress = newress.replace (/1111111010/gi, '8')
    newress = newress.replace (/1111111110/gi, '9')
    newress = newress.replace (/1111111111/gi, '0')
    newress = newress.replace (/\*/gi, '0') 
    newress = newress.replace (/0000000000/gi, ' ')

    /*let arr = Object.entries(ress)*/
   /* let arr = [res]*/

  /*  for (let res in res){
        if (res.hasOwnProperty (res)){
            arr.push(res)
        }
   }*/
   
  let result = newress.split(',').join('')
   console.log(typeof(result));


    return (result)
    
   /* let bin = {
    "0000001011": 'a',
    "0011101010": 'b',
    "0011101110":'c',
    "0000111010":'d',
    "0000000010":'e',
    "0010101110":'f',
    "0000111110":'g',
    "0010101010":'h',
    "0000001010":'i',
    "0010111111":'j',
    "0000111011":'k',
    "0010111010":'l',
    "0000001111":'m',
    "0000001110":'n',
    "0000111111":'o',
    "0010111110":'p',
    "0011111011":'q',
    "0000101110":'r',
    "0000101010":'s',
    "0000000011":'t',
    "0000101011":'u',
    "0010101011":'v',
    "0000101111":'w',
    "0011101011":'x',
    "0011101111":'y',
    "0011111010":'z',
    "1011111111":'1',
    "1010111111":'2',
    "1010101111":'3',
    "1010101011":'4',
    "1010101010":'5',
    "1110101010":'6',
    "1111101010":'7',
    "1111111010":'8',
    "1111111110":'9',
    "1111111111":'0',
    "**********": ' ',
 }*/
 /*let result= bin.join('') */  
 /*let arr = Object.values(bin)
 let result = arr.join()
 return result*/

}

module.exports = {
    decode
}