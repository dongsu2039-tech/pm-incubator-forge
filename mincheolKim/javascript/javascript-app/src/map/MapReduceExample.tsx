// 3, 6, 9, 12, 15를 더한 결과를 출력해봅시다.
export const MapReduceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10]

    // reduce의 경우엔 같이 연산됩니다.
    // ((누산 대상, 배열의 요소) => 누산 대상 + 배경 요소, 초기값)
    let result_array: number[] = 
        number_array.reduce((accumulator, element) => accumulator + element, 5)

    return (
        <div>
            <h3>javascript Reduce Function</h3>

            <pre>{
                `
number array = ${number_array}
result_array = ${result_array}
                `
            }</pre>
        </div>
    )
}