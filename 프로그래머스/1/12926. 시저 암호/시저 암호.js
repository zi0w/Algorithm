function solution(s, n) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        let text = s[i];
        if (text === ' ') {
            answer += ' ';
            continue;
        }
        const textArr = lowercase.includes(text) ? lowercase : uppercase;
        let index = textArr.indexOf(text) + n;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}