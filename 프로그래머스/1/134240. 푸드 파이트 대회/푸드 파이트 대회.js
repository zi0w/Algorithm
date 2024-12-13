function solution(food) {
    let myFood = '';

    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);
        for (let j = 0; j < count; j++) {
            myFood += i;
        }
    }
    
    const opponentFood = [...myFood].sort((a,b) => b - a).join("");
    return (myFood + 0 + opponentFood + "");
}