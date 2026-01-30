export const MapFilterExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10]

    // filter가 오면 배열의 요소를 element로 뽑음
    // 화살표 이후가 핵심인데
    // element % 4 === 0 은 아래를 의미함
    // 배열의 날개 요소를 4로 나눈 나머지가 맞나? True / False
    // filter는 조건의 결과가 True인 것들만 뽑아감
    let result_array: number[] = 
        number_array.filter(element => element % 4 === 0)

        // 만약 for루프로 구현한다면 어떻게 해야 했을까? Te -> Ti로 논리 검증
        // for (배열 전체 순회) {
        //      if (배열 요소 % 4 === 0) {
        //          result_array.push(배열 요소)
        //      }
        // }
    return (
        <div>
            <h3>javascript Filter Function</h3>

            <pre>{
                `
 number_array = ${number_array}
 result_array = ${result_array}      
                `
            }</pre>
        </div>
    )
}