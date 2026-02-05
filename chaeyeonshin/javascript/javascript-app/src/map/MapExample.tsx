export const MapExample = () => {
    // ':number[]'는 'typescript의 특성' 중 하나
    // typescript의 특성이란 type을 알려주는 행위
    // 즉, number_array는 number 타입의 배열이다.
    // 다른 타입으로 변하는 것 방지
    let number_array: number[]= [2, 4, 6, 8, 10]

    // .map() 함수는 배열의 각 요소를 불러와 내부 함수에 전달
    // num => num * num 는 화살표 함수(arrow function)로
    // num(배열의 각 요소)을 입력받아 num * num을 반환
    let square_result_array: number[]= number_array.map(num => num * num)

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

