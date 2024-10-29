function solution(n)
{
    const numToStr = String(n)
    let answer = 0;
    
    for (i=0; i < numToStr.length; i++) {
        answer += parseInt(numToStr[i]);    
    }
    return answer;
}