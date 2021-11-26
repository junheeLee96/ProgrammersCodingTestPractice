
/*모의고사
1번 수포자가 찍는 방식: 
1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 
2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 
3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 
 solution 함수를 작성해주세요.
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,


제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

const asnwers = [1,2,3,4,5];
//return = [1]
/*수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.
*/

let one = [];
let two = [];
let three = [];

for(let i =0; i<asnwers.length; i=i+5){
    one[i]=1;
    one[i+1]=2;
    one[i+2]=3;
    one[i+3]=4;
    one[i+4]=5;
}

for(let i = 0; i<asnwers.length;i+=8){
    two[i]=2;
    two[i+1]=1;
    two[i+2]=2;
    two[i+3]=3;
    two[i+4]=2;
    two[i+5]=4;
    two[i+6]=2;
    two[i+7]=5;
}


for(let i=0; i<asnwers.length;i+=10){
    three[i]=3;
    three[i+1]=three[i];
    three[i+2]=1;
    three[i+3]=three[i+2];
    three[i+4]=2;
    three[i+5]=three[i+4];
    three[i+6]=4;
    three[i+7]=three[i+6]
    three[i+8]=5;
    three[i+9]=three[i+8];
}

let a = [];

for(let j = 0; j<asnwers.length;j++){
    if(asnwers[j] === one[j]){
        let one1 =0
        one1 +=1;
    }
    if(asnwers[j] === two[j]){
        let two2 = 0;
        two2 += 1;
    }

    if(asnwers[j] === three[j]){
        let three3 = 0;
        three3 +=1;
    }
}

a.push(one1);
a.push(two2);
a.push(three3);




