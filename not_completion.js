

const completion = ["lee","hee"];
const participant = ["lee","jun","hee"];
let i = 0;
let j = 0;


function sex(completion, participant,i) {
    if (completion[i] === participant[j]) {
        return true;
    } else {
        return false;
    }
}

loop1: for (i = 0; i < completion.length; i++) {
    loop2: for (j = 0; j < participant.length; j++) {
        if (sex(completion, participant,i)) {
            participant.splice(j, 1);
            break loop2;
        };
    }
}
/*

const completion = ["lee","hee"];
const participant = ["lee","jun","hee"];

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    let max = participant.length;
    for(let i = 0; i<max; i++){
        if(participant[i] != completion[i]) return participant[i];
    }
}

console.log(solution(participant, completion));

*/















