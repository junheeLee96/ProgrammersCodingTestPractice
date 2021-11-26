





const moves = [1, 5, 3, 5, 1, 2, 1, 4]
let mv = [];
moves.forEach(function (el) {
    mv.push(el - 1);
})
//mv = [0, 4, 2, 4, 0, 1, 0, 3]

//4 3 1 1 3 2 2
//result = 4;
//4 3 1 1 3 2 0 4
const board = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 3],
                [0, 2, 5, 0, 1],
                [4, 2, 4, 4, 2],
                [3, 5, 1, 3, 1]
];

/*
[0, 0, 0, 0, 0],
[0, 0, 1, 0, 3],
[0, 2, 5, 0, 1],
[4, 2, 4, 4, 2],
[3, 5, 1, 3, 1]         [1, 5, 3, 5, 1, 2, 1, 4]

4 3 1 1 3 2 4
*/

let arr = [];


loo1: for (let i = 0; i < moves.length; i++) {
    loop2: for (let j = 0; j < board.length; j++) {
        if (board[j][mv[i]] !== 0) {
            arr.push(board[j][mv[i]]);
            board[j][mv[i]] = 0;
            break;
        }
    }
}

let cnt;
for(let k=0; k<arr.length; k++){
    if(arr[k] === arr[k+1]){
        cnt +=2;
        arr[k+1] =0;
    }
}



/*
function solution(board, moves) {
    let result = []; // 바구니
    let cnt = 0;
    
    for(let i=0; i<moves.length; i++){
    // moves의 길이만큼만 작동합니다.
         const peek = moves[i]-1; // moves 순서에 맞는 인덱스를 위해 1을 빼줍니다
        
        for(let j=0; j<board.length; j++){
            if( board[j][peek] === 0 ) continue;
            // 뽑기 기계가 0을 만나면 아래로 내려가도록, 배열의 다음 순서로 넘깁니다
            else{
                const lastLength = result.length <= 1 ? 0 : result.length-1;
                // 바구니 배열의 크기가 1보다 작거나 같으면 배열의 첫번째 인덱스를, 그렇지 않으면 마지막 인덱스를 사용합니다.
                
                if(result[lastLength] === board[j][peek]){
                // 바구니의 마지막 인형과 방금 뽑은 인형이 같으면
                    board[j][peek] = 0;
                // 0으로 만들고(인형을 뽑고)
                    result.splice(lastLength);
                // 바구니의 마지막 배열을 지운 후
                    cnt += 2;
                // 인형 수만큼 숫자를 카운트 합니다
                }
                else{
                // 바구니의 마지막 인형과 방금 뽑은 인형이 다르면
                    result.push(board[j][peek]);
                    // 바구니에 넣고
                    board[j][peek] = 0;
                    // 인형 자리는 0으로 만듭니다
                }
                break;
                // break를 해주지 않으면 뽑기의 마지막 하단부까지 뽑기 때문에, 인형을 뽑았으면 break를 걸어줍니다
            }
        }
    }
    
    return cnt;
}*/


