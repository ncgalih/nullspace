const nullspace = (M) => {
    let step = []
    console.log(M, '\n')

    let i = 0
    while (i < M.length-1) {
        let pvtRow = i
        while(M[pvtRow][i]==0){
            if(pvtRow==M.length-1) break
            pvtRow++
        }
        if(M[pvtRow][i]==0){
            i++
            continue
        }
        if(pvtRow!=i){
            const temp = M[i]
            M[i] = M[pvtRow]
            M[pvtRow] = temp
            step.push({name: `exchange row${i+1} and row${pvtRow+1}`, M: JSON.stringify(M)})
        }
        const pivot = M[i][i]

        let j = i+1
        while(j < M.length) {
            const f = M[j][i]/pivot
            if(M[j][i]==0){
                j++
                continue
            }
            for (let k = i; k < M[0].length; k++) {
                M[j][k] = M[j][k] - f*M[i][k]
            }
            step.push({name: `row${j+1} = row${j+1} - ${f}*row${i+1}`, M: JSON.stringify(M)})
            j++
        }
        i++
    }
    let pivot = []
    let row = M.length-1
    while(row>=0){
        let col = 0
        while(M[row][col]==0){
            if(col==M[0].length-1) break
            col++
        }
        if(M[row][col]!=0)
            pivot.push({col, row})
        row--
    }
    let X = new Array(M[0].length)
    let freeCol = []
    for (let i = 0; i < M[0].length; i++) {
        if(!pivot.some(({col})=>col==i)) freeCol.push(i)
        else X[i] = 0
    }

    let NS = new Array(freeCol.length)

    freeCol.forEach((f,i)=>{
        NS[i] = Array(M[0].length).fill(0)
        NS[i][f]=1

        pivot.forEach(({col, row})=>{
            for(let j=col+1; j<M[0].length; j++){
                NS[i][col] -= NS[i][j]*M[row][j]/M[row][col]
            }
        })
    })
    step.forEach(s => {
        console.info(s.name)
        console.log(JSON.parse(s.M))
    })
    console.log('\nNullspace =',NS) 
    return {result: NS, step} 
}
export default nullspace
