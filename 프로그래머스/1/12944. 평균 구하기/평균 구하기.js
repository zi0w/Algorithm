function solution(arr) {
    let answer = 0;
    
    arr.forEach(function(number){
        answer += number;      
    })
    answer /= arr.length;
    
    return answer;
}