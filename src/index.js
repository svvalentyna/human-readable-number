module.exports = function toReadable (number) {
    let numberArray = number.toString().split('')
    let numberLength = numberArray.length;
    let numberInWords = '';
    let th = ['','thousand','million', 'billion','trillion'];
    let dg = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if(numberLength === 1){
      numberInWords = dg[number];
    }
    if(numberLength === 2){
      if(number >= 10 && number <= 19){
        numberInWords = tn[number - 10];
      }
      if(number >= 20 && number <= 99){
        if(numberArray[1] == 0){
          numberInWords = tw[numberArray[0] - 2];
        } else {
          numberInWords = `${tw[numberArray[0] - 2]} ${dg[numberArray[1]]}`;
        }
      }
    }
    if(numberLength === 3){
      if(number >= 100 && number <= 999){
        numberInWords = `${dg[numberArray[0]]} hundred`;
        if(numberArray[1] == 1){
          if(numberArray[2] == 0){
            numberInWords += ` ${tn[0]}`;
          }
          if(numberArray[2] > 0){
            let convertNumber = Number(`${numberArray[1]}${numberArray[2]}`)
            numberInWords += ` ${tn[convertNumber - 10]}`;
          }
        }
        if(numberArray[1] == 0 && numberArray[2] > 0) {
          numberInWords += ` ${dg[numberArray[2]]}`;
        }
        if(numberArray[1] > 1){
          if(numberArray[2] == 0){
            numberInWords += ` ${tw[numberArray[1] - 2]}`;
          }
          if(numberArray[2] > 0){
            let convertNumber = Number(`${numberArray[1]}${numberArray[2]}`)
            numberInWords += ` ${tw[numberArray[1] - 2]} ${dg[numberArray[2]]}`;
          }
        }
      }
    }
    return numberInWords;
  }