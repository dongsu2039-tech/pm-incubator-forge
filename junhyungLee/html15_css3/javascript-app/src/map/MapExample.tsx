
export const MapExample = () => {
   let number_array: number[] = [2, 4, 6, 8, 10]
   // 'number[]' 는 typescript 특성을 가짐.
   // type을 명시해주는 작업
   // 'number[]' 는 숫자 배열임을 명시하는 행위
   let square_result_array: number[] = number_array.map(num => num * num)     
   // square(제곱) 결과 배열
   // number_array.map()을 사용하면 아래와 같이 동작
   // 1. number_array 내부에 요소들을 1개씩 꺼내옴
   // 2. num 이라는 것은 2, 4, 6, 8, 10 이 num * num 으로 제곱으로 계산하여 결과가 나옴
   
    return (
    <div>
        <h3>javascript Map (Hash 방식)</h3>

            <pre>{
               `               
number_array = ${number_array}
square_result_array = ${square_result_array}
               `  
            }</pre>
         </div>
    )
}

