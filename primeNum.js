

const numbers = "17";


function check(ch){
    const num = parseInt(ch);
    for(let n=2; n<num-1; n++){
        if(num%n === 0){
            return true;
        }else{
            return false;
        }
    }
}

function solution(numbers) {
    let a=[];
    let ch;
    let cnt = 0;
    for(let i = 0; i<numbers.length; i++){
        a[i] = numbers[i];
    }
    a.sort(function(a,b){
        return b-a
    });
    for(let j =0; j<numbers.length; j++){
        for(let k=0; k<numbers.length;k++){
            ch=String(a[j]+a[k]);
            if(!check(ch)){
                cnt +=1;
            }
            ch=String(a[k]+a[j]);
            if(!check(ch)){
                cnt +=1;
            }
        }
    }
    return cnt;

}

solution(numbers);


