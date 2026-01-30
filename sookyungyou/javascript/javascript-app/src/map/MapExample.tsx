export const MapExample = () => {
    let number_array :number[] = [2, 4, 6, 8, 10]
    // 순수 javascript의 경우에는 아래처럼 표현 가능
    // let number_array = [2, 4, 6, 8, 10]
    // ':number []'은 typescript의 특성 o
    // typscript: type을 명시하는 작업
    // 따라서 ':number []'은 숫자 배열임을 명시하는 행위 

    let square_result_array: number[] = 
        number_array.map(element => element * element)
    // squre(제곱) 결과 배열
    // number_array.map()을 사용하면 아래와 같이 동작

    // 1. number_array 내부에 요소들을 1개씩 낱개로 꺼내옴
    // 2. element라는 낱개 요소로 2 혹은 4, 6, 8, 10이 됨을 의미
    // 3. => 를 통해 이 내용을 화살표 내용의 연산으로 적용
    //    element * element = 각 요소의 제곱


   
    return (
        <div>
            <h3>javascript Map Function </h3>
            
            <pre>{
                `
number_array = ${number_array}
square_result_array = ${square_result_array}
                `        
    
             }</pre>
        </div>
    )
}