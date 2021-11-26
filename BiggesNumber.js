



const numbers = [1,2,3,4];

let answer = numbers.sort(function(a,b){
    `${b}${a}` - `${a}${b}`
}.join(''));

    console.log(answer[0] === '0' ? '0' : answer);


