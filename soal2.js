let number = prompt('Berapa derajat celcius yang ingin anda konversikan ke fahrenheit?')
let number2 = prompt('Berapa derajat fahrenheit yang ingin anda konversikan ke celcius?')

//celcius ke fahrenheit
multiplyByNineFifths = (number) => {
    return number * (9 / 5);
}

getFahrenheits = (celcius) => {
    return multiplyByNineFifths(celcius) + 32;
}

document.write(getFahrenheits(number) + " <P>Derajat Fahrenheit")


//fahrenheit ke celcius
multiplyByFifthNine = (number2) => {
    return number2 - 32;
}

getCelcius = (fahrenheits) => {
    return multiplyByFifthNine(fahrenheits) * (5 / 9);
}

document.write(getCelcius(number2) + "<p> Derajat Celcius")