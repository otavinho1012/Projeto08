export const notANumber = (value) => { 
    isNaN(value) || value ==""
    return 
}

export function IMC(inputWeight, inputHeight) {
    let conta = (inputWeight / ((inputHeight / 100) ** 2)).toFixed(2)
    return conta
}