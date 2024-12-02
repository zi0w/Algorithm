function solution(sizes) {
    let minWidth = 0;
    let minHeight = 0;

    for (const size of sizes) {
        size.sort((a, b) => a - b);
        
        const width = size[0];
        const Height = size[1];
        
        minWidth = Math.max(minWidth, width);
        minHeight = Math.max(minHeight, Height);
    }
    
    return minWidth * minHeight;
}
