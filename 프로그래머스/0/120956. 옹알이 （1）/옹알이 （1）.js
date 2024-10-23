// 풀이1
function solution(babbling) {
    let answer = 0;
    for (i = 0; i < babbling.length; i++) {
        if(babbling[i].replace("aya", " ").replace("ye", " ").replace("woo", " ").replace("ma", " ").trim() === "") {
            answer++
        }
    }
    return answer;
}


// 풀이2
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


