//1. create Function that create triangle pattern according to the height 
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// ● Parameters: height → triangle height

let angka: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const triangle = (heigth: number,) => {
    let sequence = 1;                   // menampung nilai awal angka
    for (let i = 0; i <= heigth; i++) {
        let triangleRow = "";              //menampung nilai awal untuk row segitiga
        for (let j = 0; j < i; j++) {
            triangleRow += sequence.toString() + " ";
            sequence++;
        }
        console.log(triangleRow);
    }
}
triangle(4)





//2, Create a function that can loop the number of times according to the input we   provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".

const fizzBuzz = (n: number[]) => {
    return
}

const data = (n: number) => {
    let collect = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            // console.log("FizzBuzz")
            collect.push("FizzBuzz")
        } else if (i % 3 == 0) {
            // console.log("fizz")
            collect.push("Fizz")
        } else if (i % 5 == 0) {
            // console.log("Buzz")
            collect.push("Buzz")
        } else {
            // console.log(i)
            collect.push(i)
        }
        // return collect;
    }
    return collect;
}

let results = data(6);
let result = data(15)
console.log(results);


//3. Create A function program
// ● Create a function to calculate Body Mass Index(BMI)
// ● Formula: BMI = weight(kg) / (height(meter))2
// ● Parameters: weight & height
// ● Return values:
// ○ <18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

const bmiProgram = (weight: number, height: number) => {
    let returnVal = "";

    let formula = weight / height ** 2;

    if (formula < 18.5) {
        returnVal = "less Weight"
    } else if (formula > 18.5 && formula <= 24.9) {
        returnVal = "ideal"
    }
    else if (formula > 25.0 && formula <= 29.9) {
        returnVal = "overweight"
    }
    else if (formula > 30.0 && formula <= 39.9) {
        returnVal = "very Overwigth"
    }
    else {
        returnVal = "obesity"
    }
    return returnVal;

}
let hasilBmi = bmiProgram(60, 1.7);
console.log(hasilBmi);
let hasilBmi2 = bmiProgram(70, 1.6);
console.log(hasilBmi2);
let hasilBmi3 = bmiProgram(120, 1.7);
console.log(hasilBmi3);

//4. ● Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] →[2, 4, 6, 8, 10]
let numberCheck: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removeOdd = (arr: number[]) => {
    let numAwal = arr;
    let numHasil: number[] = [];

    for (let i = 1; i <= numAwal.length; i++) {
        console.log(i)
        numHasil.push(i)
        if (i % 2 != 0) {
            return numHasil.pop()
        } else {
            return numHasil.push(i)
        }
    }
    return numHasil;
}

// removeOdd(numberCheck);
let hasilnya = removeOdd(numberCheck);
console.log(hasilnya)

//build in method alternative
const hapusOdd = (arr: number[]) => {
    return arr.filter(function (number) {
        return number % 2 === 0;
    })
}
let oddRemove = hapusOdd(numberCheck);
console.log(oddRemove);


//5. ● Write a function to split a string and convert it into an array of words
// ○ Example: “Hello World” →[“Hello”, “World”]
let word: string = "Hello World";

const splitFunction = (value: string) => {
    return value.split(" ");
}
let hasilSplit = splitFunction(word);
console.log(hasilSplit)

