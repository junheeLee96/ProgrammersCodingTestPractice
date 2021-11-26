

/*
포켓몬이 들어있는 배열 nums 중, 포켓몬을 선택한다.
포켓몬 개수는 n/2로 제한한다.
최대한 다양한 포켓몬을 선택한다.
이때, 가장 많은 종류의폰켓몬을 선택하는 방법을 찾아, 
그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

예를 들어 포켓몬 [3,3,3,2,2,4]가 있다면 최대 3마리까지 선택.
최대 고를 수 있는 포켓몬 3, 2, 4가 선택된다.
따라서 result는 3.
*/

const nums = [3,1,2,3];
let result = [];
//result = 2;

//filter함수를 통해 배열 nums의 중복을 제거한다.
//filterArr = [3,1,2]
const filterArr = nums.filter((el,ind)=>{
    return nums.indexOf(el) === ind;
});


let cnt =0;

//중복을 제거한 filterArr 배열의 개수를 세어준다.
for(let i =0; i<filterArr.length; i++){
    cnt +=1;
}

if(cnt > nums.length/2){
    cnt = nums.length/2;
}

console.log(cnt);













