// implemente aqui as funções de teste
//1
function testeReverseString1() {
    let result = reverseString("Kenzie Academy Brasil");
    let expected = "lisarB ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 testeReverseString1()

function testeReverseString2(){
    let result = reverseString("Hello World 123")
    let expected = "321 dlroW olleH"
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `esperado: ${expected}, obtido: ${result}`)
}

testeReverseString2()


//2
function testReverseSentence1(){
    let result = reverseSentence("bob likes dogs")
    let expected = "dogs likes bob"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testReverseSentence1()

function testReverseSentence2(){
    let result = reverseSentence("once upon a time")
    let expected = "time a upon once"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testReverseSentence2()


//3
const arr1 = [0, -2, 5, 6, 15, -10, 8, 'a']
const arr2 = [0.2, 14, 'k', 5.25, 80, 115, -2, -15.32, 51]

function testMinimumValue1(){
    let result = minimumValue(arr1)
    let expected = -10
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testMinimumValue1()

function testMinimumValue2(){
    let result = minimumValue(arr2)
    let expected = -15.32
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testMinimumValue2()


//4
function testMaximumValue1(){
    let result = maximumValue(arr1)
    let expected = 15
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testMaximumValue1()

function testMaximumValue2(){
    let result = maximumValue(arr2)
    let expected = 115
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testMaximumValue2()


//5
const arr3 = [18, 5]
const arr4 = [52, 3]

function testCalculateRemainder1() {
    let result = calculateRemainder(arr3) 
    let expected = 3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testCalculateRemainder1()

function testCalculateRemainder2() {
    let result = calculateRemainder(arr4) 
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testCalculateRemainder2()


//6
const stg5 = '1 3 5 3 7 3 1 1 5'
const stg6 = '20.3 8 8 4 56 5 56 51 8.52'

function testDistinctValues1(){
    let result = distinctValues(stg5)
    let expected = '1 3 5 7'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testDistinctValues1()

 function testDistinctValues2(){
    let result = distinctValues(stg6)
    let expected = '20.3 8 4 56 5 51 8.52'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

 testDistinctValues2()


 
 
 
 

 
 
 

 

 //7 NAO ESTÁ PRONTA
// const stg7 = "1 3 5 3 7 3 1 1 5"
// const stg8 = "2 1 1 8 8.99 2 2"

// function testCountValues1(){
//     let result = countValues(stg7)
//     let expected = '1(3) 3(3) 5(2) 7(1)'
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// testCountValues1()

// function testCountValues2(){
//     let result = countValues(stg8)
//     let expected = '2(3) 1(2) 8(1) 8.99(1)'
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// testCountValues2()











// //8
// const str1 = "a + b + c - d"
// const obj1 = {a: 1, b: 7, c: 3, d: 14}
// const str2 = "a / b * c - d"
// const obj2 = {a: 10, b: 2, c: 0.5, d: -14}

// function testEvaluateExpression1() {
//     let result = evaluateExpression(str1, obj1);
//     let expected = -3
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// testEvaluateExpression1()

// function testEvaluateExpression1() {
//     let result = evaluateExpression(str2, obj2);
//     let expected = 1
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// testEvaluateExpression2()