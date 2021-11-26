
let rows = 3;
let columns = 4;
let numbers = 0;

function solution(rows, columns,numbers) {
    let answer = [[]];
    let rownum = 0;
    let colnum = 0;
    let ZeroCount = rows * columns;

    for (let i = 0; i < rows; i++) {
        answer[i] = [];
        for (let j = 0; j < columns; j++) {
            answer[i][j] = 0;
        }
    }
    
        for(let k = 0; k<999; k++){
            if(ZeroCount === 0){
                break;
            }
            if(answer[rownum][colnum] % 2 === 0){
                rownum = rownum +1;
                numbers += 1;
                answer[rownum][colnum] = numbers
                ZeroCount --;
            }else {
                colnum += 1;
                numbers += 1;
                answer[rownum][colnum] = numbers
                ZeroCount--;
            }
            if(rownum === rows){
                rownum = 0;
                numbers += 1;
                answer[rownum][colnum] = numbers
            }else if (colnum === columns){
                colnum = 0;
                numbers += 1;
                answer[rownum][colnum] = numbers
            }
        }
        console.log(answer);
    }
    solution(rows, columns);

answer[0][0] = 1;
let rowNum = 0;
let colNum = 0;
let plusnumber = 1;

for(let k = 0; k<999; k++){
   if(answer[rowNum][colNum] %2 === 0){
    rowNum+=1;
    answer[rowNum][colNum] = plusnumber+1;
    plusnumber +=1;
   }else {
       colNum += 1;
       plusnumber +=1;
       answer[rowNum][colNum] = plusnumber;
   }


}
console.log(answer);















/*
const s = "aaabbaaa";
const result = [2,6];

let count = 1;
const res = [];

for(let i =0; i<s.length; i++){

    if(s[i] === s[i+1]){
        count +=1;
    }else{
        res.push(count);
        count =1;
    }
}
let reverscount = 1;
for(let j =s.length-1; j>0; j--){
    if(s[j] === s[j-1]){
        reverscount += 1;
    }
    if(s[j] !== s[j-1]){
        break;
    }
}

if(s[0] === s[s.length-1]){
    res[0] = reverscount + res[0];
    res.splice(-1,1);
}

const answer = res.sort(function(a,b){
    return a-b
});

console.log(answer); // 3 2 3

*/









/*
const arr = [3, 3, 3, 3, 3, 3];

const newArr = [1,2,3];
const plusNum = [];

for(let i =0; i<newArr.length; i++){
    let count = 0;
    for(let j =0; j<arr.length; j++){
        if(newArr[i] === arr[j]){
            count +=1;
        }
    }
    plusNum.push(count);
}

const maxNumber = plusNum.reduce(function(a,b){
    return Math.max(a,b,);
});

const answer = [];

for(let k = 0; k<3; k++){
    answer.push(maxNumber-plusNum[k]);
}

console.log(answer);
*/
