function solution (n, m) {
    const smallNum = Math.min(n, m);
    const bigNum = Math.max(n, m);
    
    const calculateGCD = (x, y) => {
        return x % y === 0 ? y : calculateGCD(y, (x % y));
    }
    
    const gcd = calculateGCD(bigNum, smallNum);
    const lcm = (n * m / gcd);
    
    return [gcd, lcm];
}