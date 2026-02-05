export const MapFilterExample = () => {
    let number_array: number[] = [1, 2, 3, 4, 5];   // 원본 배열
    let result_array: number[] = number_array.filter((num) => num % 4 === 0); // 4의 배수만 필터링
    // filter 함수는 조건을 만족하는 요소들로만 새로운 배열을 생성
    return (
        <div>
            <h2>Map Filter Example</h2>
            <pre>{`
number_array = ${number_array.join(", ")} // 원본 배열
result_array = ${result_array.join(", ")} // filter 함수 결과 저장
            `
            }</pre>        
        </div>
    )
}