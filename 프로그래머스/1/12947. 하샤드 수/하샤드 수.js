function solution(x) {
    let sum = 0;
    const arr = (x+"").split("")
    
    for (i=0; i<arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    return x % sum === 0 ? true : false;
}