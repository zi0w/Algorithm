function solution(arr) {
    if (arr.length <= 1) return [-1];
    let min = arr[0];
    
    for (let i=1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let answer = arr.filter((el) => el !== min);
    
    return answer;
}