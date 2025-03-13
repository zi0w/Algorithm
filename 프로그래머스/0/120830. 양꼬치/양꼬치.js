function solution(n, k) {
    const total = 12000 * n + 2000 * k;
    const service = Math.floor(n / 10) * 2000;
    
    return total - service;
}