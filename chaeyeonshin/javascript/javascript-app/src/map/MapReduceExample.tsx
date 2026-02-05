export const MapReduceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10]

    // .reduce 구조
    // ((누산 대상, 배열의 요소) => 누산 대상 + 배열 요소, 초기값)
    // 앞서 만들었던 for Loop 를 단순화
    // 또한 값이 배열로 나오지 않기 때문에 number[]가 아님
    let result_array: number = number_array.reduce((accumulator, element) => accumulator + element, 0)

    return (
        <div>
            <h3>javascript Reduce Function</h3>

            <pre>{
                ` 
number_array = ${number_array}
result_array = ${result_array}
                `
            }</pre>
        </div>
    )
}

