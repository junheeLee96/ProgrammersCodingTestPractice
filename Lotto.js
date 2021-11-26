const lottos = [44, 1, 0, 0, 31, 25];

const win_nums = [31, 10, 45, 1, 6, 19];


//1,31

function solution(lottos, win_nums) {
    const answer = [];

 let zeroNum = 0;
 for(let k = 0;k<lottos.length; k++){
     if(lottos[k]===0){
         zeroNum +=1;
     }
 }
 let num =0;
 for(let i = 0; i<lottos.length; i++){
     for(let j =0; j<lottos.length; j++){
         if(lottos[i] === win_nums[j]){
             num +=1;
         }
     }
 }

 if(zeroNum === 6){
     answer.push(1);
     answer.push(6);
 }

 else if(num ===6){
     answer.push(1);
     answer.push(1);
 }
 else if(num === 0 && zeroNum === 0){
     answer.push(6);
     answer.push(6);
 }
 else{
    answer.push(6 - (num+zeroNum-1)); 
     answer.push(6-(num-1));
 }

 return answer;
}

solution();





