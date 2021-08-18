//1
const reverseString = (str) => {
    let transformToArray = str.split('')
    let reverse = transformToArray.reverse().join('')
    return reverse
}

//2
const reverseSentence = (sentence) => {
    let transformToArray = sentence.split(' ')
    let reverse = transformToArray.reverse().join(' ')
    return reverse
}

//3
const minimumValue = (arr) => {
    let newArray = []
    arr.map((item)=>{
        if(typeof item === 'number'){
            newArray.push(item)
        }
    })
    return Math.min(...newArray)
}

//4
const maximumValue = (arr) => {
    let newArray = []
    arr.map((item) => {
        if(typeof item === 'number'){
            newArray.push(item)
        }
    })
    return Math.max(...newArray)
}

//5
const calculateRemainder = (arr) => {
    let resto = arr[0]%arr[1]
    return resto
}

//6
const distinctValues = (stg) => {
    let stgToArr = stg.split(' ')
    let newArray = []
    stgToArr.map((item)=>{
        if(newArray.includes(item) === false){
            newArray.push(item)
        }
    })
    let result = newArray.join(' ')
    return result
}










// let output = `(${count++})`
//  return output

 //     ["1", "3", "5", "3", "7", "3", "1", "1", "5"]

//7 NAO ESTÁ PRONTA
// const countValues = (str) => {
//     let stgToArr = str.split(' ')   
//     let newArray = []
//     let output = `${item}(${count++})`

//   //  let obj = {`${key}(${value})`}

//     stgToArr.map((item) => {
//         if(newArray.includes(item) === false){
//             newArray = (item)
//         }
//     })

//     console.log(newArray)
// }

















// 8
// const evaluateExpression = (str, obj) => {
//     let newArray = []
//     for(let i = 0; i < str.length; i++){

//     }
//     let cada = Object.keys(obj).forEach((item)=>{item})

//     for(let i = 0; i < str.length; i++){
        
//     }

//     for (let [key, value] of Object.entries(obj)) {
//     let teste = key + value;
//     console.log(teste)
// }
// }

// evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})


