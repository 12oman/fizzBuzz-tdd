module.exports = {
    fizzBuzz: fizzBuzz
}

function fizzBuzz(number){
    // if number %3 is not 0, return number otherwise return fizz
    if (number%3 == 0){
    return "fizz"
    }
    else{
    return number
    }    
}