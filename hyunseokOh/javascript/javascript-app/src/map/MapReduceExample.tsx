export const MapReduceExample = () => {
    // 숫자 배열의 각 요소를 제곱하는 예제
    // map 함수를 사용하여 새로운 배열 생성
    let number_array: number[] = [1, 2, 3, 4, 5];
    // reduce 함수를 사용하여 배열 요소들의 합계 계산
    // reduce 함수는 누적기와 현재 값을 인자로 받아 누적된 값을 반환
    let mapped_array: number = 
        number_array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (
        <div>
            <h2>Map Reduce Example</h2>
            <pre>{`
number_array = ${number_array.join(", ")} // 원본 배열
mapped_array = ${mapped_array} // map 함수 결과 저장
            `
            }</pre>        
        </div>
    )
}