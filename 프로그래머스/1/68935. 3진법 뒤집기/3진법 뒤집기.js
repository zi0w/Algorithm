function solution(n) {
    const base3 = n.toString(3);
    const reverseBase3 = base3.split("").reverse().join("")
    return parseInt(reverseBase3, 3);
}