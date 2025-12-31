export const SecondProblem = () => {
// 3, 6, 9, 12, 15를 더한 결과를 출력해봅시다.
    let loopResultArray = []
    let Summation = 0

    for (let i = 3, j = 1; j <= 5; i += 3, j++) {
        loopResultArray.push(i)
        Summation += loopResultArray[j - 1]
    }
    
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>
            <pre>{
                `
loopResultArray = [${loopResultArray}]
Summation = ${Summation}
                `
            }</pre>
        </div>
    )
} 