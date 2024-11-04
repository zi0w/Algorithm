function solution(n) { 
    let sqrt = Math.sqrt(n);
    console.log(sqrt)
    if (sqrt % 1 === 0 && sqrt > 0) {
        return Math.pow(sqrt+1, 2);
    } else {
        return -1
    }
}