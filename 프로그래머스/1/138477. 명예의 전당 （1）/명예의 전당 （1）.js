function solution(k, score) {
    let answer = [];
    let arr = [];
    
    score.forEach((s) => {
        arr.push(s);
        arr.sort((a, b) => b - a);
        if (arr.length > k) arr.pop();
        answer.push(arr[arr.length - 1]);
    });
    
    return answer;
}