function solution(a, b, n) {
    let totalCount = 0;
    
    while (n >= a) {
        let newBottles = Math.floor(n / a) * b;
        totalCount += newBottles;
        n = newBottles + (n % a);
    }
    return totalCount;
}