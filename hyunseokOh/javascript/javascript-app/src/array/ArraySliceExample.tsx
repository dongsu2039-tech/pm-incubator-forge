export const ArraySliceExample = () => {
    let number_array: number[] = [1, 2, 3, 4, 5];   // 원본 배열
    let sliced_array: number[] = number_array.slice(1, 4); // 인덱스 1부터 4 미만까지 슬라이스
    
    return (
        <div>
            <h2>Array Slice Example</h2>
            <pre>{`
number_array = ${number_array.join(", ")} // 원본 배열
sliced_array = ${sliced_array.join(", ")} // slice 함수 결과 저장 (인덱스 1부터 4 미만까지 슬라이스)
            `
            }</pre>        
        </div>
    )
}