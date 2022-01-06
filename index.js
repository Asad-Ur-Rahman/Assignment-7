// const arr = [1,2,3,4,5,6,7,8,9];
    
// const newArr = [];
// while(arr.length) newArr.push(arr.splice(0,3));
    
// console.log(newArr);




function addition() {

    var input1 = document.getElementsByName('matrix1');
    var input2 = document.getElementsByName('matrix2');
    var output = document.getElementsByName('op');

    // console.log(typeof(input1))
    // console.log(input1)

    //var sum1 = sum2 = 0;

    // var m1 = [];
    // var m2 = [];

    // var sum = [];

    for (var i = 0; i < input1.length; i++) {
        // var a = input[i];
        // k = k + "array[" + i + "].value= "
        //                    + a.value + " ";\

        // console.log(Number(input1[i].value))
        // m1.push(Number(input1[i].value));

        // sum1 += Number(input1[i].value);
        // sum2 += Number(input2[i].value);

        // m1.push(Number(input1[i].value));
        // m2.push(Number(input2[i].value))

        output[i].value = (Number(input1[i].value) + Number(input2[i].value))



    }

    // for (let i = 0; i < m1.length; i++) {
    //     sum.push(m1[i] + m2[i])
        
    // }
    
    // console.log(m1);
    // console.log(m2);
    // console.log(sum)
    
    //console.log(typeof(input.value))
}