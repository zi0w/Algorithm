function solution(s) {
    let answer = [];
    const splitArr = s.split(' ');
    
    for (i = 0; i < splitArr.length; i++) {
        let word = "";
        for (j = 0; j < splitArr[i].length; j++) {
            if (j % 2 === 0) {
                word += (splitArr[i][j].toUpperCase());
            } else {
                word += (splitArr[i][j].toLowerCase());
            }
        }
        answer.push(word);
    }
    return answer.join(" ");
}