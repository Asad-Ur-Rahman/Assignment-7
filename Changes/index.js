

// var input1 = [
//     [2, 3, 4, 0], // 0,0  0,1  0,2  0,3
//     [5, 3, 0], // 1,0  1,1  1,2  1,3
//     [3, 2, 1, 0]  // 2,0  2,1  2,2  2,3
// ];


// console.log("input1[0][0]: ", input1[0][0])
// console.log("input1[0][1]: ", input1[0][1])
// console.log("input1[0][2]: ", input1[0][2])

// console.log("input1[0][0]: ", input1[1][0])
// console.log("input1[0][1]: ", input1[1][1])
// console.log("input1[0][2]: ", input1[1][2])

// console.log("input1[0][0]: ", input1[2][0])
// console.log("input1[0][1]: ", input1[2][1])
// console.log("input1[0][2]: ", input1[2][2])


// for (var i = 0; i < input1.length; i++) {

//     for (var j = 0; j < input1[i].length; j++) {

//         // console.log("i, j: ", i, j);
//         document.write(input1[i][j])
//     }
//     document.write("\n")
// }



var input1 = [
    [],
    [],
    []
];

var input2 = [
    [],
    [],
    []
];
var result = [
    [],
    [],
    []
];

var input1Span = document.getElementById("input1");
var input2Span = document.getElementById("input2");
var resultSpan = document.getElementById("result");


for (var i = 0; i < 3; i++) {

    for (var j = 0; j < 3; j++) {

        input1[i][j] = Number(prompt(`First Metrics - Enter ${i}, ${j}:`));
        input1Span.innerText += `${input1[i][j]}   `
    }
    input1Span.innerText += `\n`;
}



for (var i = 0; i < 3; i++) {

    for (var j = 0; j < 3; j++) {

        input2[i][j] = Number(prompt(`Second Metrics - Enter ${i}, ${j}:`));
        input2Span.innerText += `${input2[i][j]} `
    }
    input2Span.innerText += `\n`;
}
console.log("input1: ", input1);



for (var i = 0; i < input1.length; i++) {

    for (var j = 0; j < input1[i].length; j++) {

        result[i][j] = input1[i][j] + input2[i][j];
        resultSpan.innerText += `${result[i][j]} `

    }
    resultSpan.innerText += `\n`;
}





