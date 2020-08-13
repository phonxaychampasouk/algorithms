const countIslands = (mapStr) =>{
    let islandCount = 0;
    let map = mapStr.split('/n').map(row=>(row.split('')));
    const searchIsland = ( row, col ) => {
        if ( map[row] && map[row][col] === '0' ){
            map[row][col]= 'x';
            searchIsland(row - 1, col)
            searchIsland(row + 1, col)
            searchIsland(row, col - 1)
            searchIsland(row, col + 1);
        }
    }
    for( let row = 0; row < map.length; row += 1){
        for(let col = 0; col < map[row].length; col += 1){
            if (map[row][col] === '0'){
                islandCount += 1;
                searchIsland(row, col);
            }
        }
    }
    return islandCount;
    }
    
    const island = '0.../n0.../...0/n..00';
    console.log('test: ', island);
    console.log('expected: ', 2);
    console.log('output: ', countIslands(island));