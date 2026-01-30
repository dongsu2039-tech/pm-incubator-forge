
export const MapExample = () => {
// 순수 자바 script에는 number[]없음
// typeScript에 추가된 문법
//typeScript는 type 명시 혹은 지정(?) 가능
// number[] : 숫자형 배열


    let number_array: number[] = [2, 4, 6, 8, 10]
// sqaure(제곱) 결과 배열
//number_array.map()사용시 아래와 같이 동작

//1. number_array요소들을 하나씩 꺼내옴
//2. 꺼내온 요소를 num에 담음
//3. =>를 통해 이 내용을 화살표 내용의 연산으로 적용함
 // num*num = 각 요소의 제곱
//4. 제곱된 결과값들을 새로운 배열에 담음
    let square_result_array: number[] = number_array.map(num => num * num  )

return (
        <div>
        <h3>javascript Map func </h3>
            <pre>{`

            number_array = ${number_array}
            square_result_array = ${square_result_array}
  
              `   }</pre>
        </div>
    )               }