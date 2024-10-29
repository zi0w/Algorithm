// 풀이 1
function solution(n)
{
    const numToStr = String(n)
    let answer = 0;
    
    for (i=0; i < numToStr.length; i++) {
        answer += parseInt(numToStr[i]);    
    }
    return answer;
}

// 풀이 2
function solution(n)
{
    return (n+"").split("").reduce((a, b) => (a * 1) + (b * 1));
}
