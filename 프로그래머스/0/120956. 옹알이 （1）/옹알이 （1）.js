function solution(babbling) {
    let answer = 0;
    for (i = 0; i < babbling.length; i++) {
        let regex = /^(aya|ye|woo|ma)+$/;
        if (regex.test(babbling[i])){
           answer ++;
           }
    }
    return answer;
}


