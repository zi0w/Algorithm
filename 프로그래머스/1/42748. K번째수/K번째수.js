function solution(array, commands) {
    let answer = [];

    for (let command of commands) {
        const newArray = array.slice(command[0]-1, command[1]);
        newArray.sort((a, b) => a - b);
        answer.push(newArray[command[2]-1]);
    }
    return answer;
}