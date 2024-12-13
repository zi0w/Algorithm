function solution(food) {
    let myFood = '';

    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);
        myFood += String(i).repeat(count);
    }
    
    const opponentFood = [...myFood].reverse().join("");
    return myFood + 0 + opponentFood;
}