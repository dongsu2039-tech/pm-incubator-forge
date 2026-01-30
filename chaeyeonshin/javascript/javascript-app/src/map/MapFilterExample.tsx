export const MapFilterExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10]

    // filter는 조건의 결과가 true인 요소만 뽑아 result_array에 넣는다.
    // .filter(요소를 부를 변수 => 조건 )
    // if문의 단순화
    let result_array: number[] = number_array.filter(element => element % 4 === 0)

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

