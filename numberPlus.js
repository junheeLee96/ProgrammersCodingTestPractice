
//없는 숫자 더하기.
//배열 numbers 안에서 0~9까지의 숫자 중, 없는 숫자를 더한다.
const numbers = [1,2,3,4,6,7,8,0];

//result = 14

//arr = [0,1,2,3,4,5,6,7,8,9]
//numbers = [1,2,3,4,6,7,8,0];


let arr = [0,1,2,3,4,5,6,7,8,9];

let answer2 = arr.filter(x => !numbers.includes(x));
console.log(answer2);

let answer = 0;
for(let i =0; i<answer2.length; i++){
    answer += answer2[i];
}

console.log(answer);







