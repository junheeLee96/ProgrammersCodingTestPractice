

function solution() {
    const priorities = [2, 1, 3, 2];
    let location=2;
    var answer = 0;
    const pri = priorities.map((a,i) => [a,i]);
    const arr = [];


    for(let i = 0; i < pri.length ;){
        const temp = pri.shift();
        
        if( pri.some((a)=> temp[0]< a[0])) pri.push(temp);
        else {
            arr.push(temp);
            if(arr[answer][1] == location) break;
            else answer ++;
        }
    }

    console.log(answer+1);
}


solution();
