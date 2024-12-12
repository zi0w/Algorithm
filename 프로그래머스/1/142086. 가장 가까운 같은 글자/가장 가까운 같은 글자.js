function solution(s) {
    return [...s].map((char, i) => {
        if (i === 0) return -1;
        const matchedIndex = s.lastIndexOf(char, i-1);
        return matchedIndex === -1 ? -1 : i - matchedIndex;
    }); 
}