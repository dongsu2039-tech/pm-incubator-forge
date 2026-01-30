export const MapReduceExample = () => {

    let number_array: number[] = [2,4,6,8,10]

    // reduce의 경우엔 for문과 같은 연산이지만 단순화 시킨 작업
    // ((누산 대상, 배열의 요소) => 누산 대상 + 배열 요소, 초기값)
    // accumulator의 시작값은 지정한 초기값으로 설정됨
    let result_array: number = number_array.reduce((accumulator,element) => accumulator + element,0) 

    return(
        <div>
            <h3>Javascript Reduce Function</h3>
            <pre>{
            `
            number_array = ${number_array}
            result_array = ${result_array}
            ` 
            }</pre>
        </div>
    )
}