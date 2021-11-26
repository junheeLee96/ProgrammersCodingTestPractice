

const clothes = [["crowmask", "face"], 
                ["bluesunglasses", "face"], 
                ["smoky_makeup", "face"],
                ["red","body"]];


function solution(clothes) {
    let cnt = 0;
    for (let i = 0; i < clothes.length; i++) {
        for (let j = i+1; j < clothes.length; j++) {
            if (clothes[i][1] !== clothes[j][1]) {
                cnt += 1;
            }
        }
    } console.log(cnt + clothes.length);
}

solution(clothes);




