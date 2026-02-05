export const MapExample = () => {
    // 순수 javascript인 경우에 아래와 같이 표현해도 됨
    // let number_array = [2, 4, 6, 8, 10]
    // 옆에 있는 ':number[]' <- 이건 뭘까?

    // 해당 요소부터는 typescript 특성을 가짐
    // typescript라는 녀석은 type을 명시하는 작업임
    // 결론적으로 ':number[]' 는 숫자 배열임을 명시하는 행위임
    let number_array: number[] = [2, 4, 6, 8, 10]

    // square(제곱) 결과 배열
    // number_array.map()을 사용하면 아래와 같이 동작함
    
    // 1. number_array 내부에 요소들을 1개씩 꺼내옴
    // 2. element(num) 이라는 것이 2 혹은 4, 6, 8, 10이 됨을 의미함
    // 3. => 를 통해 이 내용을 화살표 내용의 연산으로 적용함을 의미함
    //    element(num) * element(num) = 각 요소의 제곱
    //    element랑 num 같은 거임
    let square_result_array: number[] = number_array.map(element => element * element)
  

    return (
        <div>
            <h3>javascript Map Function</h3>

            <pre>{
                `
 number_array = ${number_array}
 square_result_array = ${square_result_array}      
                `
            }</pre>
        </div>
    )
}